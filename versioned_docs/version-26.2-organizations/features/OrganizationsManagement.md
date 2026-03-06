---
title: Organizations Management
description: Comprehensive guide to managing organizations in ReportPortal 26.2-organizations, including advanced configuration and administration features.
---

# Organizations Management

:::info Organizations Feature
This topic is specific to ReportPortal 26.2-organizations version and is not available in version 26.1.
:::

The **Organizations Management** feature provides administrators with powerful tools to manage multi-tenant environments, configure organization-level settings, and maintain governance across multiple projects.

## Organization Administration

### Creating and Configuring Organizations

Organizations serve as the top-level container for projects and users. When creating a new organization:

1. **Define Organization Structure**
   - Set organization name and identifier
   - Configure organization-level branding
   - Establish organizational hierarchy

2. **Configure Access Policies**
   - Define who can create projects within the organization
   - Set default permissions for new projects
   - Configure cross-project access rules

3. **Resource Management**
   - Set storage quotas per organization
   - Configure API rate limits
   - Manage concurrent user limits

### Organization Roles and Permissions

Organizations introduce new role levels beyond project roles:

- **Organization Owner**: Full control over organization settings, projects, and users
- **Organization Admin**: Can manage projects and users, but cannot delete the organization
- **Organization Member**: Can access organization-level dashboards and reports
- **Project Manager**: Manages specific projects within the organization

## Advanced Features

### Multi-Project Dashboards

Create dashboards that aggregate data across all projects within an organization:

- **Cross-Project Analytics**: View metrics spanning multiple projects
- **Organization Health Score**: Monitor overall organization performance
- **Resource Utilization**: Track storage and API usage across projects

### Organization-Level Integrations

Configure integrations that apply to all projects within an organization:

- **Single Sign-On (SSO)**: Organization-wide authentication
- **Notification Channels**: Centralized alerting for all projects
- **Bug Tracking**: Unified bug tracking system configuration

### User Provisioning

Streamline user management across the organization:

- **Bulk User Import**: Import users from CSV or LDAP
- **Automatic Role Assignment**: Assign roles based on user groups
- **User Lifecycle Management**: Automated onboarding and offboarding

## Best Practices

### Organization Structure

- **Naming Conventions**: Use consistent naming for projects within organizations
- **Project Grouping**: Group related projects together for easier management
- **Access Control**: Implement least-privilege access principles

### Resource Planning

- **Capacity Planning**: Monitor resource usage to plan for growth
- **Cost Management**: Track resource consumption for budgeting
- **Performance Optimization**: Optimize settings for organization size

## Migration from 26.1

If you're upgrading from ReportPortal 26.1:

1. **Existing Projects**: All existing projects will be assigned to a default organization
2. **User Migration**: Users maintain their existing permissions
3. **Configuration**: Organization-level settings can be configured post-migration

## Troubleshooting

Common issues when managing organizations:

- **Permission Errors**: Verify user roles at both organization and project levels
- **Resource Limits**: Check organization quotas if projects fail to create items
- **Integration Issues**: Ensure organization-level integrations are properly configured

For more information, see the [Admin Panel documentation](/admin-panel) or contact your organization administrator.

