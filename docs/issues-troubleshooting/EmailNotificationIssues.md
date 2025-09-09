---
description: Troubleshoot email notification issues in ReportPortal test automation reporting tools with ThreadPool and SMTP configuration solutions.
---

# Email Notification Issues

In case of observing issues with email notifications when email service stopped processing messages, RP administrators should be aware of some kinds of known issue types:

1. ThreadPoolTaskExecutor capacity is too small for handling large number of queued users to be notified.

**Solution:**<br />
Update environment variable rp_environment_variable_executor_pool_user-email_queue with bigger value (default: 1000).

2. The number of ThreadPoolTaskExecutor active threads is bigger than the number of simultaneous connections allowed by SMTP server (e.g., 10 maximum connections for gmail). That makes email server consider such heavy load as DDoS attack and refuse to establish new connections.

**Solution:**<br />
Decrease number of active threads by updating environment variable rp_environment_variable_executor_pool_user-email_max (default: 10)

In order to update environment variables, you should edit your docker-compose.yml file.<br />
[Job environment variables example for docker](https://github.com/reportportal/reportportal/blob/2b22c61f87674aaf2efc7a973af38004c2517680/docker-compose.yml#L201)

:::note
In addition, there are daily limits on sending emails from one account. Different email servers have their own restrictions (e.g. 2000 max messages for gmail).
:::
