---
sidebar_label: Amazon Application Load Balancer Configuration Guide
description: Configure Amazon ALB and NGINX Ingress Controller for ReportPortal test automation reporting tools on AWS EKS.
---

# Amazon Application Load Balancer Configuration Guide

This article describe how to deploy Amazon Application Load Balancer & NGINX Ingress Controller in Amazon EKS.

## Deploy NGINX Ingress Helm Chart with specific configuration

Before get started, ensure NGINX Ingress is not yet deployed on your Amazon EKS cluster.

First, add and update the [Bitnami Helm chart](https://github.com/bitnami/charts/tree/main/bitnami/nginx-ingress-controller/) repository:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update bitnami
```

Now, deploy the NGINX Ingress controller with the following configuration:


```bash
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

This will set up the NGINX Ingress controller with NodePort service type, using ports 30080 for HTTP and 30443 for HTTPS. The deployment will be named "gateway" in the "nginx-ingress" namespace.

## Request/Import SSL certificate in AWS Certificate Manager

:::note
Before requesting the certificate, you probably need to create a domain name in AWS. If you haven't done this before, follow this guide to create a Hosted Zone in Route 53: [Creating a public hosted zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
:::

To request a certificate provided by ACM for a domain name:

1. Sign in to the [AWS Certificate Manager console](https://console.aws.amazon.com/acm).
2. Select **Request a certificate**.
3. Enter your API's custom domain name, for example, `reportporta.k8s.com`, in the **Domain name** field.
4. Optionally, you can add another name to this certificate.
5. Click **Review and request**.
6. Click **Confirm and request**.
7. To ensure a valid request, a registered owner of the internet domain must consent to the request before ACM issues the certificate.

To import a certificate into ACM for a domain name, follow the official guide: [Getting certificates ready in AWS Certificate Manager](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains-prerequisites.html).

## Create Target Group for NGINX Ingress

After requesting certificate in AWS Certificate Manager, the next step is to create a Target Group to route traffic to your NGINX Ingress controller.

Follow these steps to create a target group:

1. Sign in to the [EC2 console](https://eu-central-1.console.aws.amazon.com/ec2/home?region) and choose Target Groups at the bottom of the left panel.
2. Click on **Create Target Groups**.
3. Fill in required data:
   - Target type: **Instances**.
   - Target group name: **rp-k8s-tg**.
   - Protocol: **HTTPS: 30443**.
   - IP address type: **IPv4**.
   - Choose your VPC.
   - Protocol version: **HTTP1**.
   - Health check protocol: **HTTPS**.
   - Health check path: **/healthz**.
4. Click on **Next**.
5. Add your Amazon EKS Nodes as pending.
6. **Create**.

This target group will allow you to route traffic to your NGINX Ingress controller efficiently

## Create Application Load Balancer form Amazon Console

Now, let's create an Application Load Balancer (ALB) to route traffic to our NGINX Ingress controller:

1. Open [EC2 console](https://eu-central-1.console.aws.amazon.com/ec2/home?region) and choose Load Balancer at the bottom of the left pane
2. Click on **Create Load Balancer**.
3. Choose Application Load Balancer and click **Create**.
4. Fill in required data:
   - Load balancer name: **rp-k8s-alb**.
   - Scheme: depends on your requirements it may be **internet-facing** or **internal**.
   - IP address type: **IPv4**.
   - Network mapping: Choose your VPC and **public** subnets if you choose internet-facing or **private** if you choose internal scheme.
   - Security groups: Choose the **Cluster security group** that allows traffic from/to the EKS cluster and the security group that allows traffic from the internet or your VPC.
   - Listeners and routing: **HTTPS: 443**, Forward to the aready created Target group **rp-k8s-tg**.
   - Secure listener settings: Choose Security policy depends on your requirements.
   - Choose the certificate you requested/imported in ACM.
5. Click on **Create load balancer**.

This will create an ALB that routes traffic to the NGINX Ingress controller.

## Deploy ReportPortal Helm Chart to Amazon EKS

Before deploying ReportPortal to your Amazon EKS cluster, make sure to update the Ingress Nginx configuration in your `values.yaml` file as follows:

```yaml
<...>
ingress:
  enable: true
  hosts:
    - reportporta.k8s.com
  class: nginx
<...>
```

Follow the official guide [Deploy ReportPortal with Kubernetes](/installation-steps/DeployWithKubernetes) to complete the deployment.
