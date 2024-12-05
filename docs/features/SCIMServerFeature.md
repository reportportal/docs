---
sidebar_position: 8
sidebar_label: SCIM Server feature
---

# SCIM Server feature

SCIM is a protocol that simplifies how you manage user identities and access across various applications and services. It automates the sharing of user identity information between your identity provider (like Azure AD or Okta) and service providers, such as ReportPortal.

ReportPortal includes a SCIM Server that acts as a bridge between your identity provider and ReportPortal, streamlining the management of user accounts.

**Benefits**

* Reduced administrative work: Automating the creation and removal of user accounts helps eliminate manual errors and saves time.
* Enhanced security: SCIM ensures that security policies and access controls are consistently applied across different systems.
* Improved user experience: Users are automatically assigned to projects and roles based on their group memberships in the identity provider.

**Key Features**

* Automated Account Setup: SCIM allows for the automatic creation of user accounts in ReportPortal, complete with project and role assignments.
* Flexible Account Types: Users can be designated as Admins or Regular Users in ReportPortal.
* Dynamic Updates: Changes in the identity provider trigger updates in account type and project assignments in ReportPortal.
* Account De-provisioning: Supports both "soft" delete (disabling accounts) and "hard" delete (removing accounts).

**Group Management**

Both user and application groups are recognized as sources for project membership. Group names in the identity provider must follow a specific pattern set on the SCIM Server to correctly update project and role assignments in ReportPortal. This involves a regular expression pattern that identifies the project name and role from the group name.

**Default Roles**

A default project role can be assigned to users who don't have a specific role pattern in their group membership on the Identity Provider side.

:::note
The SCIM server feature is a premium offering from ReportPortal, available as part of our paid support services. We provide assistance with both the identity provider settings and the SCIM Server configuration.<br />
If you're interested in enabling SCIM for your setup, please [contact us](https://reportportal.io/contact-us/general) for more information.




