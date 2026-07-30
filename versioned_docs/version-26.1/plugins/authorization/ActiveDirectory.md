---
sidebar_label: Active Directory
description: Configure Active Directory integration for secure authentication in ReportPortal with enterprise SSO.
---

# Active Directory

The Active Directory plugin is available in ReportPortal on the Plugins page, enhancing the efficiency of our test report dashboard.

To set up access with Active Directory, follow these steps:

1. Log in to ReportPortal as an ADMIN user.

2. Click on the dropdown menu located to the right of the user's image.

3. Select the 'Administrative' link.

4. From the left-hand sidebar, click on 'Plugins'.

5. Navigate to the 'Active Directory' tab.

6. Click on 'Add new integration'.

At this point, several fields should be displayed.

```javascript 
'Domain*': text
'URL*': text
'Base DN*': text
'Email attribute*': text
'Full name attribute' : text
'Photo attribute' : text
'UserSearchFilter' (the same as for LDAP): text 
  ```

Fields marked in red are mandatory. Once filled, click the 'Submit' button. Completing this process grants all Active Directory users access to the ReportPortal instance.

To access ReportPortal, users should utilize their domain credentials (Login and password).

Refer to the example provided below featuring configurations for Microsoft Active Directory that have been successfully utilized by our users:

**Table with properties and values for LDAP Microsoft Active Directory**

|          Property         |                                                          Value                                                          |
|:---------------------:|:----------------------------------------------------------------------------------------------------------------------:|
| Url                   | `auth-servers.domain.org.int:3358`                                                                                     |
| Base DN               | `OU=MAIN,DC=DOMAIN,DC=ORG,DC=INT`                                                                                      |
| Manager DN            | `cn=Service UserBind,ou=Service Accounts,ou=Colombia,ou=America,ou=ServiceAccounts,dc=DOMAIN,dc=ORG,dc=INT`              |
| User search filter    | `(&(objectClass=user)(sAMAccountName={0}))` |
| Password encoder type | `NO`                                                                                                                     |
| Email attribute       | `mail`                                                                                                                   |
| Full name attribute   | `displayName`                                                                                                            |
| Photo attribute       | `thumbnailPhoto`                                                                                                         |

