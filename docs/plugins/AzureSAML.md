---
sidebar_position: 8
sidebar_label: Azure SAML
---

# Azure SAML

Login to ReportPortal via Azure SAML is available starting from version 5.7 (SAML Okta was implemented in versions before 5.7).

Azure SAML is a useful authorization method for big companies with 100+ employees, especially if this organization is already presented in Azure service. The main benefit here is no need for manual account creation. Users can log in to the ReportPortal using Azure SAML in an uncomplicated way: select login with SAML, then choose Azure, and upon login users’ data is synchronized with ReportPortal automatically.

If your organization is using Azure SAML and some employees left, there is no need to remove their accounts from ReportPortal and from other Azure applications – just clearing their accounts in Azure will be enough.

To configure authorization via Azure SAML we need to synchronize Azure and ReportPortal.

Firstly, configure SAML on Azure side.

## Configure SAML on Azure side

1. Log in to [Azure portal](https://portal.azure.com) using your organization creds.

2. Click ```App Services```.

![ImageName](img/azure-saml/2022-05-30_19h14_42.png)

3. Click ```View``` in the ```Manage Azure Active Directory``` section.

![ImageName](img/azure-saml/2022-05-30_19h15_26.png)

4. Click ```Manage Tenants```.

![ImageName](img/azure-saml/2022-05-31_19h46_20.png)

### Create organization in Azure

5. If you haven’t configured organization in Azure yet, click ```Create```.

>**NOTE:** if you have configured organization in Azure, please, go to step 9.

![ImageName](img/azure-saml/2022-05-30_19h22_45.png)

6. Select a tenant type (```Azure Active Directory```) and click ```Next: Configuration >``` button.

![ImageName](img/azure-saml/2022-05-30_19h24_56.png)

7. Fill in the necessary fields and click ```Next: Review + create >``` button.

![ImageName](img/azure-saml/2022-05-30_19h32_38.png)

8. Pass the Captcha verification and click the ```Create``` button.

![ImageName](img/azure-saml/2022-05-30_19h33_55.png)

### Create your application in Azure

9. After the creation of an organization go to the ```Enterprise Applications``` section.

![ImageName](img/azure-saml/2022-05-30_19h54_48.png)

10. Click ```New application```.

![ImageName](img/azure-saml/2022-05-30_19h55_05.png)

11. Click ```Create your own application```.

![ImageName](img/azure-saml/2022-05-30_19h56_44.png)

12. Enter the name of your application, choose ```Integrate any other application you don't find in the gallery (Non-gallery)``` bullet and click ```Create``` button.

![ImageName](img/azure-saml/2022-05-30_19h59_42.png)

### Assign users to the application in Azure

13. Assign users (e.g., yourself) to this application. Please, follow the next screenshots:

![ImageName](img/azure-saml/2022-05-30_20h00_36.png)

![ImageName](img/azure-saml/2022-05-30_20h00_47.png)

![ImageName](img/azure-saml/2022-05-30_20h01_01renamed.png)

### Configure Single sign-on on Azure

14. Go to the ```Single sign-on``` section.

![ImageName](img/azure-saml/2022-05-30_20h01_28renamed.png)

15. Choose SAML.

![ImageName](img/azure-saml/2022-05-31_11h10_19.png)

### Basic SAML Configuration

16. Configure ```Basic SAML Configuration``` settings as follows:

![ImageName](img/azure-saml/2022-05-31_11h00_41.png)

### Add Azure attributes

17. Edit ```Attributes & Claims``` settings and add ***email***, ***firstName*** and ***lastName*** attributes (default Azure attributes have ugly format). Please follow the next screenshots:

![ImageName](img/azure-saml/2022-05-31_11h27_22.png)

![ImageName](img/azure-saml/2022-05-31_11h27_30.png)

![ImageName](img/azure-saml/2022-05-31_11h30_30.png)

SAML configuration is completed on Azure side after adding these attributes.

Lastly, configure SAML on ReportPortal side.

## Configure SAML on ReportPortal side

1. Log in to **ReportPortal** as Admin.

2. Open Menu at the bottom and choose ```Administrate``` section.

![ImageName](img/azure-saml/2022-05-31_13h28_02.png)

3. Select ```Plugins```.

![ImageName](img/azure-saml/2022-05-31_13h28_21.png)

4. Open ```SAML```.

![ImageName](img/azure-saml/2022-05-31_13h28_26.png)

5. Click the ```Add integration``` button.

![ImageName](img/azure-saml/2022-05-31_14h37_51.png)

## Synchronize Azure SAML and ReportPortal

6. Synchronize Azure SAML and ReportPortal as follows:

![ImageName](img/azure-saml/SAML-integration.png)

Finally, you can log in to ReportPortal using Azure SAML.
