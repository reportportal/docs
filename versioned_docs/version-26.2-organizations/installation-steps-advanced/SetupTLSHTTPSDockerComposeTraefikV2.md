---
sidebar_position: 10
sidebar_label: Setup TLS / HTTPS Docker Compose + Traefik v2
description: Practical guide to setting up TLS/HTTPS in our test results dashboard
---

# Setup TLS / HTTPS Docker Compose + Traefik v2

This guide documents how to enable HTTPS for a ReportPortal Docker Compose deployment using **Traefik v2** as the reverse proxy. It covers both **self-signed certificates** (for local or internal testing) and **Let’s Encrypt certificates** (for publicly trusted TLS).

## 1. Supported TLS Scenarios

| **Certificate Type** | **Environment** | **Public Internet Required** |
| ----------- | ----- | ------------ |
| Self-signed (OpenSSL) | Localhost / Internal VPC	 | No |
| Let’s Encrypt (HTTP-01) | Public EC2 + Route 53 | Yes |
| Let’s Encrypt (DNS-01) | Private VPC | No |

:::important
Let’s Encrypt HTTP-01 validation requires **public internet reachability**.<br />
Deployments in private subnets without an Internet Gateway **must use DNS-01** instead.
:::

## 2. Test Environment (Reference)

**AWS Infrastructure (HTTP-01 scenario)**

| **Component** | **Specification**                |
| ----------- |----------------------------------|
| EC2 | t3.medium (2 vCPU, 4 GB RAM) /   
| OS | Ubuntu 24.04 / Amazon Linux 2023 |
| Subnet | Public subnet with IGW           |
| DNS | Route 53 public hosted zone      |
| Domain | <a>tls-docker.example.com</a>    |

Using a public subnet removes ambiguity during troubleshooting.

**Required Security Group Rules**

| **Type** | **Port** | **Source** | **Purpose** |
| ----------- | ----- | ------------ | ----- |
| HTTP | 80	| 0.0.0.0/0 | ACME HTTP-01 |
| HTTPS | 443 | 0.0.0.0/0 | HTTPS access |
| TCP | 8081 | Your IP | Traefik dashboard |
| SSH | 22 | Your IP | Management |

## 3. Scenario 1 — Self-Signed Certificates (OpenSSL)

### 3.1 Generate Certificates

```
mkdir -p certs

openssl genrsa -out certs/reportportal.key 2048

openssl req -new -x509 \
  -key certs/reportportal.key \
  -out certs/reportportal.crt \
  -days 365 \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

### 3.2 Traefik File Provider (TLS)

Create ```certs/tls.yml```:

```
tls:
certificates:
- certFile: /certs/reportportal.crt
keyFile: /certs/reportportal.key
```

### 3.3 Validation — Self-Signed TLS

**Verify key matches certificate**

```
openssl x509 -noout -modulus -in certs/reportportal.crt | openssl md5
openssl rsa  -noout -modulus -in certs/reportportal.key | openssl md5
```

**Trust validation**

```
curl -v --cacert certs/reportportal.crt https://localhost
```

**Fingerprint comparison**

```
oopenssl x509 -in certs/reportportal.crt -noout -fingerprint -sha256

openssl s_client -connect localhost:443 </dev/null 2>/dev/null \
| openssl x509 -noout -fingerprint -sha256
```

**Subject and validity**

```
openssl s_client -connect localhost:443 </dev/null 2>/dev/null \
| openssl x509 -noout -subject -issuer -dates
```

## 4. Scenario 2 — Let’s Encrypt (HTTP-01)

### 4.1 Prerequisites (Mandatory)

* Domain resolves to a **public IP**
* EC2 subnet has route:

```
0.0.0.0/0 → Internet Gateway
```

* Ports **80** and **443** reachable from the internet

### 4.2 Prepare ACME Storage

```
touch acme.json
chmod 600 acme.json
```

### 4.3 Docker Compose — Traefik Gateway

```
services:
gateway:
image: traefik:v2.11.32
restart: unless-stopped
ports:
- "80:80"
- "443:443"
- "8081:8081"
volumes:
- /var/run/docker.sock:/var/run/docker.sock:ro
- ./acme.json:/acme.json
command:
- --providers.docker=true
- --providers.docker.exposedbydefault=false

      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --entrypoints.traefik.address=:8081
 
      - --entrypoints.web.http.redirections.entrypoint.to=websecure
      - --entrypoints.web.http.redirections.entrypoint.scheme=https
 
      - --certificatesresolvers.letsencrypt.acme.email=admin@example.com
      - --certificatesresolvers.letsencrypt.acme.storage=/acme.json
      - --certificatesresolvers.letsencrypt.acme.httpchallenge=true
      - --certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web
 
      - --api.dashboard=true
      - --api.insecure=true
```

### 4.4 Service TLS Labels

```
labels:
- "traefik.enable=true"
- "traefik.http.routers.app.rule=Host(`tls-docker.example.com`)"
- "traefik.http.routers.app.entrypoints=websecure"
- "traefik.http.routers.app.tls=true"
- "traefik.http.routers.app.tls.certresolver=letsencrypt"
- "traefik.http.services.app.loadbalancer.server.port=8080"
```

## 5. Validation — Let’s Encrypt (HTTP-01)

**DNS resolution**

```
dig +short tls-docker.example.com
dig @8.8.8.8 +short tls-docker.example.com
```

**TCP reachability**

```
nc -vz tls-docker.example.com 80
```

**HTTP reachability**

```
curl -v http://tls-docker.example.com
```

**ACME challenge path**

```
404 Not Found is expected and correct
```

**HTTPS validation**

```
curl -v https://tls-docker.example.com
```

**Certificate issuer verification**

```
echo | openssl s_client \
-connect tls-docker.example.com:443 \
-servername tls-docker.example.com \
2>/dev/null | openssl x509 -noout -issuer -subject -dates
```

Expected issuer:

```
CN = Let's Encrypt
```

## 6. Private Subnets — Important Limitation

If the domain resolves to a **private IP (RFC1918)** or the subnet routes traffic via **NAT Gateway only**, Let’s Encrypt **HTTP-01 will fail**.

**Symptoms**

* DNS resolves internally but not publicly
* ACME challenge never triggered
* Traefik serves default certificate

**Solution**<br />
Use **DNS-01 validation** with Route 53.

## 7. Troubleshooting

| **Issue**       | **Cause**        | **Resolution** |
|-----------------|------------------|--|
| ACME never triggers | No public ingress	 | Use DNS-01 |
| Default Traefik cert | No issued cert     | Check ACME logs |
| <a>example.com</a> email error | Invalid ACME email  | Use real domain |
| Permission denied acme.json  | Wrong file mode  | chmod 600 |
| 404 from HTTPS   | Host rule mismatch	 | Verify router rule |

## 8. Summary

* Self-signed TLS works for **local and internal environments**
* Let’s Encrypt HTTP-01 works **only with public ingress**
* DNS-01 is required for **private VPC deployments**
* Traefik configuration remains identical; only the ACME method changes
