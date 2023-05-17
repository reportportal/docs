---
sidebar_label: LDAP
---

# LDAP

LDAP plugin is available in ReportPortal on the Plugins page.

To set up access with LDAP:

1. Log in to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the'LDAP' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
'URL*': text
'Base DN*': text
'Manager DN': text
'Manager password': text
'User DN pattern': text
'User search filter': text
'Group search base': text
'Group search filter': text
'Password encoder type': text
'Email attribute*': text
'Full name attribute' : text
'Photo attribute' : text
```

Mandatory fields are marked with red.
Click the 'Submit' button.
All users of LDAP will have access to the ReportPortal instance. For access to the ReportPortal, the user should use their domain credentials (Login and password).
