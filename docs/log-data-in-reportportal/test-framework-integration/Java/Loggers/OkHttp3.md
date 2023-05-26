---
sidebar_position: 5
sidebar_label: OkHttp3
---

# ReportPortal OkHttp3 Integration

The logger intercept and logs all Requests and Responses issued by OkHttp into ReportPortal in Markdown format, including multipart requests. It recognizes payload types and attach them in corresponding manner: image types will be logged as images with thumbnails, binary types will be logged as entry attachments, text types will be formatted and logged in Markdown code blocks.

[Installation guide](https://github.com/reportportal/logger-java-okhttp3#readme)
