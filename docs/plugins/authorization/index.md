# Authorization

The **Authorization section** in ReportPortal provides detailed guidance on supported methods for user authentication, offering secure and streamlined access management within your test automation reporting dashboard. ReportPortal supports multiple authorization options, including Active Directory, GitHub, LDAP, and SAML providers like Azure SAML and Okta SAML, allowing teams to choose the method that best integrates with their existing security infrastructure.

**Active Directory**

For organizations using Microsoft’s Active Directory (AD), ReportPortal provides an integration that allows users to authenticate using their AD credentials. This method leverages the organization’s current user management system, ensuring secure access control and reducing the need for additional login information. By logging in with their AD credentials, users can access ReportPortal in alignment with the organization’s security policies.

**GitHub**

ReportPortal also supports GitHub-based authentication, allowing users to sign in with their GitHub credentials. This is particularly useful for teams managing code repositories and workflows on GitHub, providing a seamless login experience and reducing the need for separate credentials. GitHub authentication simplifies access management for developers, enabling quick, direct entry into the test report dashboard.

**LDAP**

ReportPortal’s LDAP integration enables authentication through an organization’s existing directory, making it ideal for teams with established LDAP setups. This method links ReportPortal to company directory services, providing centralized user management and enhanced security by allowing users to sign in quickly with their directory credentials.

**SAML Providers**

ReportPortal supports SAML authentication through Azure SAML and Okta SAML. These integrations enable users to authenticate via a central identity provider, which simplifies access control across multiple platforms. Azure SAML and Okta SAML provide single-click access to ReportPortal through an organization’s SSO setup, which both reduces password fatigue and aligns with enterprise security standards. This method is particularly valuable for larger teams managing numerous tools and applications within their tech ecosystem.

import DocCardList from '@theme/DocCardList';

<DocCardList />
