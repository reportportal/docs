## SAML Plugin

This plugin allows you to configure a connection with a SAML provider.

Integration with SAML will allow you to login into ReportPortal using SSO instead of tedious manual user creation.

The plugin provides a mechanism to exchange information between ReportPortal and SAML provider, such as the possibility to login to ReportPortal with SAML credentials.

### SAML provider requirements

- SAML 2.0 version
- HTTP-POST Binding
- SAML metadata by URL
- HTTPS connection for SAML Metadata
- Support SAML attributes:
    - email
    - first name
    - last name
    - full name (instead first and last name)

>**NOTE**: There are detailed manuals for configuration of [Azure SAML](https://reportportal.io/docs/Azure-SAML-integration) and [Okta SAML](https://reportportal.io/docs/Okta-SAML-integration).

### Add integration

ReportPortal contains the SAML Plugin by default.

1. Go to `Administration` -> `Plugins` -> `SAML`

2. Select `Add integration`.

### Set up connection

#### Identity provider configuration

***ReportPortal SSO initial URL***

You need to provide a URL for a SAML Provider to deliver SAML data for the identity federation.

```url
https://<host>/uat/saml/sp/SSO/alias/report-portal-sp
```
#### ReportPortal configuration

[ ![ImageName](Images/Plugins/SAMLPlugin/SAML-plugin.png) ](Images/Plugins/SAMLPlugin/SAML-plugin.png)

***Identity provider name ID (Optional)***

**Identity provider name ID** (aka name identifier formats) controls how the users at identity providers are mapped to users at service providers.

We support next formats:

```
UNSPECIFIED - used by default

urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified

EMAIL

rn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress

PERSISTENT

urn:oasis:names:tc:SAML:2.0:nameid-format:persistent 
```

***Provider name***

Provider name associated with IDP.

***Metadata URL***

URL that provides data with information about SAML Provider.

***Email***

Attribute name from SAML metadata which contains an user email. 

```xml
<saml:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri"> 
   <saml:AttributeValue xsi:type="xs:string">neuromancer@cyberspace.net</saml:AttributeValue> 
 </saml:Attribute> 
```

***ReportPortal Callback URL (Optional)***

This field provides a redirect base path.

Once you have submitted an integration with “RP callback URL”, the URL will be applied to all SAML integrations.

```
https://<host>/uat
```

***First name***

Attribute name from SAML metadata which contains an user first/given name.

```
<saml:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
<saml:AttributeValue xsi:type="xs:string">William</saml:AttributeValue>
</saml:Attribute>
```

***Last name***

Attribute name from SAML metadata which contains an user last/family name.

```
<saml:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
<saml:AttributeValue xsi:type="xs:string">Gibson</saml:AttributeValue>
</saml:Attribute>
```

***Full name***
Attribute name from SAML metadata which contains a full user name. You can use either two separate attributes for first name and last name or a combined first and last name attribute. This solely depends on your SAML provider.

```
<saml:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
<saml:AttributeValue xsi:type="xs:string">William Gibson</saml:AttributeValu
</saml:Attribute> 
```