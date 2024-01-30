---
sidebar_label: Amazon ALB + NGINX Ingress Controller
---

# Amazon ALB + NGINX Ingress Controller
This article describe how to deploy Amazon Application Load Balancer & NGINX Ingress Controller in Amazon EKS.


**Step 1.** Deploy NGINX Ingress with specific configuration
```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update bitnami

helm install gateway \
  --set service.type=NodePort \
  --set defaultBackend.enabled=false \
  --set service.nodePorts.http="30080" \
  --set service.nodePorts.https="30443" \
  -n nginx-ingress \
  --create-namespace \
  bitnami/nginx-ingress-controller \
  --wait
```

**Step 2.** Request SSL certificate from AWS Certificate Manager

**Step 3.** Create Target Group for NGINX Ingress
1. Open [EC2 console](https://eu-central-1.console.aws.amazon.com/ec2/home?region) and choose Target Groups from left panel
2. Click on **Create Target Groups**
3. Fill in required data
    1. Target type: **Instances**
    2. Protocol: **HTTP: 30080**
    3. IP address type: **IPv4**
    4. Protocol version: **HTTP1**
    5. Health check protocol: **HTTP**
    6. Health check path: /healthz
4. Click on **Next**
5. **Create**

**Step 4.** Create Application Load Balancer:
1. Open [EC2 console](https://eu-central-1.console.aws.amazon.com/ec2/home?region) and choose Load Balancer from left panel
2. Click on **Create Load Balancer**
3. Choose Application Load Balancer and click **Create**
4. Fill in required data
    1. Scheme: **Internal**
    2. IP address type: **IPv4**
    3. Listeners and routing:  **HTTPS: 443**, Forward to Target Group from previous step.
    4. Secure listener settings, Policy name: **ELBSecurityPolicy-TLS-1-2-Ext-2018-06** (Try to recommended)
    5. Certificate source: From ACM
    6. Certificate: Choose cert from previous steps
5. Create load balancer

**Step 5.** Assign Amazon Route53 DNS to ALB DNS name.
