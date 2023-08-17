---
sidebar_label: Active Directory
---

# Active Directory

Active Directory plugin is available in ReportPortal on the Plugins page.

To set up access with Active Directory:

1. Log in to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link
4. Click the 'Plugins' from the left-hand sidebar
5. Click on the'Activate Directory' tab.
6. Click on Add new integration
7. The next fields should be present:

```javascript 
'Domain*': text
'URL*': text
'Base DN*': text
'Email attribute*': text
'Full name attribute' : text
'Photo attribute' : text
'UserSearchFilter' (the same as for LDAP): text 
  ```

Mandatory fields are marked with red.
Click the 'Submit' button.
All users of Active Directory will have access to the ReportPortal instance.  
For entrance to ReportPortal, the user should use their domain credentials (Login and password).



Please find the example with configurations for Microsoft Active Directory that worked successfully provided by our user:

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

