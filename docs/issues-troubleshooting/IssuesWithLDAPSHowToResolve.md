---
sidebar_position: 5
sidebar_label: 'Issues with LDAPS: how to resolve'
description: Troubleshoot LDAPS authentication issues in ReportPortal test automation reporting tools with SSL certificate solutions.
---

# Issues with LDAPS: how to resolve 

When configuring LDAP to work with ldaps:// users may see the following error when trying to log in:
```
sun.security.validator.ValidatorException: PKIX path building failed: 
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target.
```

This error can be solved by importing the needed certificate within the authorization container:

```sh
# Enter service-authorization container as root
docker exec -u 0 -it reportportal_uat_1 sh

# Download certificates
cd /usr/local/share/ca-certificates/
wget url://to/your/foo.cert

# Import the cert to keytool. if password is required the default should be "changeit"
$JAVA_HOME/bin/keytool -import -alias ldap_cert -keystore $JAVA_HOME/lib/security/cacerts -file /usr/local/share/ca-certificates/foo.cert

# exit container and restart it
docker restart reportportal_uat_1
```
