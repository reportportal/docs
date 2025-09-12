---
sidebar_position: 3
sidebar_label: Rest Assured
description: Integrate REST Assured with ReportPortal for comprehensive test automation reporting tools and API testing request/response logging.
---

# ReportPortal Rest Assured Integration

The logger intercept and logs all Requests and Responses issued by [REST Assured](https://rest-assured.io/) into ReportPortal in Markdown format, including multipart
requests. It recognizes payload types and attach them in corresponding manner: image types will be logged as images with thumbnails, binary
types will be logged as entry attachments, text types will be formatted and logged in Markdown code blocks.

[Installation guide](https://github.com/reportportal/logger-java-rest-assured#readme)
