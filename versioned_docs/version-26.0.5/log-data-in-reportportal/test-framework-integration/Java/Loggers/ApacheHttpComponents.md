---
sidebar_position: 6
sidebar_label: Apache HttpComponents
description: Integrate Apache HttpComponents with ReportPortal for comprehensive test automation reporting tools and HTTP request/response logging.
---

# ReportPortal Apache HttpComponents Integration

The logger intercept and logs all Requests and Responses issued by [Apache HttpComponents](https://hc.apache.org/) into ReportPortal in Markdown format, including multipart requests. It recognizes payload types and attach them in corresponding manner: image types will be logged as images with thumbnails, binary types will be logged as entry attachments, text types will be formatted and logged in Markdown code blocks.

[Installation guide](https://github.com/reportportal/logger-java-httpcomponents#readme)
