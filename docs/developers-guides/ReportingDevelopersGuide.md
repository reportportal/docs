---
description: Comprehensive guide for developers on implementing test reporting in ReportPortal with detailed examples and best practices.
---

# Reporting developers guide

## Preconditions

Let's imagine we have the following tests structure:

```
(Suite) Services
    (Test) PluginServiceTest
        (Step) uploadPlugin
        (Step) updatePlugin
        (Step) removePlugin
    (Test) UserServiceTest
        (Step) createUser
        (Step) updateUser
        (Step) deleteUser
```

So our goal is run the tests and send results to ReportPortal.
We can interact with ReportPortal API instance trough HTTP requests.

The main flow is set of HTTP requests:
1. Start launch
2. Start test item 
3. Save log with attachment if necessary
4. Finish test item
5. Finish launch

Steps 2-4 should execute for each test item in structure.

Let's assume that our ReportPortal instance deployed at `http://rp.com`. And our project name is `rp_project`.

Also we need token to get access to API. There are two ways to retrieve it.

## Retrieving api token

#### Using UI

You can find it in profile (`http://rp.com/ui/#user-profile`).

#### Using UAT service

First of all you need UI-token. You can get it sending POST request to `http://rp.com/uat/sso/oauth/token` with user credentials.

```shell
curl --header "Content-Type: application/x-www-form-urlencoded" \
     --request POST \
     --data "grant_type=password&username=default&password=1q2w3e" \
     --user "ui:uiman" \
     http://rp.com/uat/sso/oauth/token
```

Response will contain `access_token` field which is UI-token 

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzU5MDA0NDgsInVzZXJfbmFtZSI6ImRlZmF1bHQiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiOGQxZmUxOGUtNWY4NC00YTcwLWEwMTctNDBmZTU4ZmY3MjU3IiwiY2xpZW50X2lkIjoidWkiLCJzY29wZSI6WyJ1aSJdfQ.-5INLZnYJhNLwU5BTBuEDd0SBPoRGLBX6uX03kaEwLs",
  "token_type": "bearer",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZWZhdWx0Iiwic2NvcGUiOlsidWkiXSwiYXRpIjoiOGQxZmUxOGUtNWY4NC00YTcwLWEwMTctNDBmZTU4ZmY3MjU3IiwiZXhwIjoxNTc4NDg4ODQ4LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiMGQyZDdiNTEtNGE3Mi00NjEwLTgxYmUtY2JmYjZhODhjNTgxIiwiY2xpZW50X2lkIjoidWkifQ.YOcpWlQSgF3LuskIqXgasjKvawbM_XP_I2oNJcgt9mM",
  "expires_in": 3600,
  "scope": "ui",
  "jti": "8d1fe18e-5f84-4a70-a017-40fe58ff7257"
}
```

Next step is retrieve API Key that lives longer that UI-token.

```shell
curl http://localhost:8080/api/users/{user_id}/api-keys \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {token}" \
  --data '{"name": "Token name"}'
```

Use `api_key` from response as a bearer token in the `Authorization` header.

## Start launch

To start launch you should send request to the following endpoint:
POST `/api/{version}/{projectName}/launch`

Start launch request model contains the following attributes:

|  Attribute  | Required | Description                                                              | Default value                             | Examples                                                                                                                                                                |
|:-----------:|----------|--------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name        | Yes      | Name of launch                                                           | -                                         | AutomationRun                                                                                                                                                           |
| startTime   | Yes      | Launch start time                                                        | -                                         | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822); 2019-11-22T11:47:01+00:00 (RFC 3339); 1574423221000 (Unix Timestamp) |
| description | No       | Description of launch                                                    | empty                                     | Services tests                                                                                                                                                          |
| uuid        | No       | Launch uuid (string identificator)                                       | auto generated(if not present in request) | 69dc75cd-4522-44b9-9015-7685ec0e1abb                                                                                                                                    |
| attributes  | No       | Launch attributes. Pairs of key and value                                | empty                                     | build:3.0.1, os:bionic                                                                                                                                                  |
| mode        | No       | Launch mode. Allowable values 'default' or 'debug'                       | default                                   | DEFAULT                                                                                                                                                                 |
| rerun       | No       | Rerun mode. Allowable values 'true' of 'false'                           | false                                     | false                                                                                                                                                                   |
| rerunOf     | No       | Rerun mode. Specifies launch to be reruned. Uses with 'rerun' attribute. | empty                                     | 694e1549-b8ab-4f20-b7d8-8550c92431b0                                                                                                                                    |

Start launch response contains the following attributes:

| Attribute  | Required | Description              | Examples                             |
|------------|----------|--------------------------|--------------------------------------|
| id         | Yes      |  UUID of created launch  | 1d1fb22e-01f7-4ac9-9ebc-f020d8fe93ff |
| number (*) | No       | Number of created launch | 1                                    |

`(*)` Field is not present in case using async endpoints

So full request to start our launch looks like 

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"rp_launch","description":"My first launch on RP","startTime":"1574423221000","mode":"DEFAULT","attributes":[{"key":"build","value":"0.1"},{"value":"test"}]}' \
     http://rp.com/api/v1/rp_project/launch
```

Where body is the following json:

```json
{
  "name": "rp_launch",
  "description": "My first launch on RP",
  "startTime": "1574423221000",
  "mode": "DEFAULT",
  "attributes": [
    {
      "key": "build",
      "value": "0.1"
    },
    {
      "value": "test"
    }   
  ] 
}
```

In the response we can see `id` and `number` if launch started successfully or an error if something went wrong. 

```json
{
  "id": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "number": 1
}
```
Value of `id` field should save somewhere. It is obligatory for report test items under this launch and will be used later.

## Start root(suite) item

Now we have created launch and can report items under it.
To start root item you should send request to the following endpoint:
POST `/api/{version}/{projectName}/item`

Start test item request model contains the following attributes:

| Attribute   | Required | Description                                                                                                                                                                                                                                   | Default value  | Examples                                                                                                                                                                |
|-------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name        | Yes      | Name of test item                                                                                                                                                                                                                             | -              | Logging Tests                                                                                                                                                           |
| startTime   | Yes      | Test item start time                                                                                                                                                                                                                          | -              | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822); 2019-11-22T11:47:01+00:00 (RFC 3339); 1574423221000 (Unix Timestamp) |
| type        | Yes      | Type of test item. Allowable values: "suite", "story", "test", "scenario", "step", "before_class", "before_groups", "before_method", "before_suite",      "before_test", "after_class", "after_groups", "after_method", "after_suite", "after_test" | -              | suite                                                                                                                                                                   |
| launchUuid  | Yes      | Parent launch UUID                                                                                                                                                                                                                            | -              | 96d1bc02-6a3f-451e-b706-719149d51ce4                                                                                                                                    |
| description | No       | Test item description                                                                                                                                                                                                                         | empty          | Tests of loggers                                                                                                                                                        |
| attributes  | No       | Test item attributes. Pairs of key and value                                                                                                                                                                                                  | empty          | most failed, os:android                                                                                                                                                 |
| uuid        | No       | Test item UUID                                                                                                                                                                                                                                | auto generated | e9ca837e-966c-412e-bf8b-e879510d99d5                                                                                                                                    |
| codeRef     | No       | Physical location of test item                                                                                                                                                                                                                | empty          | com.rpproject.tests.LoggingTests                                                                                                                                        |
| parameters  | No       | Set of parameters (for parametrized tests)                                                                                                                                                                                                    | empty          | logger:logback                                                                                                                                                          |
| uniqueId    | No       |                                                                                                                                                                                                                                               | auto generated | auto:cd5a6c616d412b6739738951c922377f                                                                                                                                   |
| retry       | No       | Used to report retry of test. Allowable values: 'true' or 'false'                                                                                                                                                                             | false          | false                                                                                                                                                                   |
| hasStats    | No       |                                                                                                                                                                                                                                               | true           | true                                                                                                                                                                    |

Start test item response contains the following attributes:

| Attribute | Required | Example                              |
|-----------|----------|--------------------------------------|
| id        | Yes      | 7189ec02-4c36-4e36-9f90-5a9b31dcbdba |

So full request to start suite test looks like

 ```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"Services","startTime":"1574423234000","type":"suite","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","description":"Services tests"}' \
     http://rp.com/api/v1/rp_project/item
```

Where body is the following json:

```json
{
  "name": "Services",
  "startTime": "1574423234000",
  "type": "suite",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "description": "Services tests"
}
```

And in the response we get `id` of created test item:

```json
{
  "id": "1e183148-c79f-493a-a615-2c9a888cb441"
}
```

Also we should save it to report child items under this one

## Start child(container) item

Next test item will be child for suite test item and it also will be parent for few step items.
It will be container item.
To start child item we need know launch UUID and parent test item UUID.
We should call the following endpoint:
POST `/api/{version}/{projectName}/item/{parentItemUuid}`

Request and response model the same as for parent item.

Full request:

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"PluginServiceTest","startTime":"1574423236000","type":"test","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","description":"Plugin tests"}' \
     http://rp.com/api/v1/rp_project/item/1e183148-c79f-493a-a615-2c9a888cb441
```

Where body is:

```json
{
  "name": "PluginServiceTest",
  "startTime": "1574423236000",
  "type": "test",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "description": "Plugin tests"
}
```

And we have a response:

```json
{
  "id": "bb237b98-22b0-4289-9490-9bb29215fe5e"
}
```

## Start child(step) item

Now we are going to start another final test item in our structure.

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"uploadPlugin","startTime":"1574423237000","type":"step","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","description":"Uploading plugin"}' \
     http://rp.com/api/v1/rp_project/item/bb237b98-22b0-4289-9490-9bb29215fe5e
```

With body:

```json
{
  "name": "uploadPlugin",
  "startTime": "1574423237000",
  "type": "step",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "description": "Uploading plugin"
}
```

And response:

```json
{
  "id": "22e55c62-d028-4b49-840f-195d7a48b114"
}
```

## Start child(nested step) item

Test item without statistics is called `Nested step` and required for grouping logs and other `nested steps`(can be expanded and collapsed on the UI-view). `Nested step` has the same body request as common test item and defined only by additional field `hasStats=false`.

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"nestedItem","startTime":"1574423237000","type":"step","hasStats":false,"launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4"}' \
     http://rp.com/api/v1/rp_project/item/22e55c62-d028-4b49-840f-195d7a48b114
```

With body:

```json
{
  "name": "nestedItem",
  "startTime": "1574423237000",
  "type": "step",
  "hasStats": false,
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4"
}
```

And response:

```json
{
  "id": "37b77h32-t028-7b49-842f-195d7b48s114"
}
```

See Nested Step usage implementation and visual appearance ([Java based example](https://github.com/reportportal/client-java/wiki/Nested-steps))

## Finish child(nested step) item

We can finish `Nested step`.
To do that we should send the following request:
PUT `/api/{version}/{projectName}/item/{itemUuid}`

Finish `Nested step` request model:

| Attribute   | Required | Description                                                                                               | Default value | Example                                                                                                                                                                 |
|-------------|----------|-----------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| endTime     | Yes      | Test item end time                                                                                        | -             | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822); 2019-11-22T11:47:01+00:00 (RFC 3339); 1574423221000 (Unix Timestamp) |
| launchUuid  | Yes      | Parent launch UUID                                                                                        | -             | 48ecc273-032f-44d4-822a-66e494e9b1e8                                                                                                                                    |
| status      | No       | Test item status. Allowable values: "passed", "failed", "stopped", "skipped", "interrupted", "cancelled". | -             | failed                                                                                                                                                                  |
| description | No       | Test item description. Overrides description from start request. Not displayed on the UI-view for Nested Steps                                         | empty         | Test item description on finish                                                                                                                                         |

If item finished successfully in the response will be message with item uuid.

Full request:

 ```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request PUT \
     --data '{"endTime":"1574423239000","status":"failed","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4"}' \
     http://rp.com/api/v1/rp_project/item/37b77h32-t028-7b49-842f-195d7b48s114
```

With body: 

```json
{
  "endTime": "1574423239000",
  "status": "failed",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4"
}
```

## Finish child item

We are not going to report more test items under this one, so we can finish it.
To do that we should send the following request:
PUT `/api/{version}/{projectName}/item/{itemUuid}`

Finish test item request model:

| Attribute   | Required | Description                                                                                         | Default value | Example                                                                                                                                                                 |
|-------------|----------|-----------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| endTime     | Yes      | Test item end time                                                                                  | -             | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822); 2019-11-22T11:47:01+00:00 (RFC 3339); 1574423221000 (Unix Timestamp) |
| launchUuid  | Yes      | Parent launch UUID                                                                                  | -             | 48ecc273-032f-44d4-822a-66e494e9b1e8                                                                                                                                    |
| status      | No       | Test item status. Allowable values: "passed", "failed", "stopped", "skipped", "interrupted", "cancelled". | -             | failed                                                                                                                                                                  |
| description | No       | Test item description. Overrides description from start request.                                    | empty         | Test item description on finish                                                                                                                                         |
| attributes  | No       | Test item attributes. Pairs of key and value. Overrides attributes on start                         | empty         | most failed, os:android                                                                                                                                                 |
| retry       | No       | Used to report retry of test. Allowable values: 'true' or 'false'                                   | false         | false                                                                                                                                                                   |
| issue       | No       | Issue of current test item                                                                          | empty         | Will be described below in separate table                                                                                                                               |

Issue part for finish test item model:

| Attribute            | Required | Description                                                                                                 | Default value | Example                                   |
|----------------------|----------|-------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------|
| issueType            | Yes      | Issue type locator. Allowable values: "pb***", "ab***", "si***", "ti***", "nd001" or "NOT_ISSUE". Where *** is locator id. | -             | pb001                                     |
| comment              | No       | Issue comment                                                                                               | empty         | Framework issue. Script outdated          |
| autoAnalyzed         | No       | Is issue was submitted by auto analyzer                                                                     | false         | false                                     |
| ignoreAnalyzer       | No       | Is issue should be ignored during auto analysis                                                             | false         | false                                     |
| externalSystemIssues | No       | Set of external system issues                                                                               | empty         | Will be described in separate table below |

External system issue: 

| Attribute  | Required | Description                            | Default value | Example                     |
|------------|----------|----------------------------------------|---------------|-----------------------------|
| ticketId   | No       | Id of ticket in external system        | empty         | ABCD1234                    |
| submitDate | No       | Ticket submit date as timestamp        | empty         | 1574696194000               |
| brsUrl     | No       | URL of external system                 | empty         | http://example.com          |
| btsProject | No       | Project name in external system        | empty         | ABCD                        |
| url        | No       | URL of ticket in external system issue | empty         | http://example.com/ABCD1234 |

If item finished successfully in the response will be message with item uuid.

Full request:

 ```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request PUT \
     --data '{"endTime":"1574423239000","status":"failed","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","issue":{"issueType":"pb001","comment":"Some critical issue"}}' \
     http://rp.com/api/v1/rp_project/item/22e55c62-d028-4b49-840f-195d7a48b114
```

With body: 

```json
{
  "endTime": "1574423239000",
  "status": "failed",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "issue": {
    "issueType": "pb001",
    "comment": "Some critical issue"    
  }
}
```

We can report other child items (`updatePlugin`, `removePlugin`) the same way as described above.
All skipped and failed items are marked as `To Investigate` by default. To mark them as not issue just send a special issue type:
`"issue": {"issueType": "NOT_ISSUE"}`.

## Finish parent(container) item

After that we should finish their parent item.
We can do it the same way as for child items.

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request PUT \
     --data '{"endTime":"1574423241000","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4"}' \
     http://rp.com/api/v1/rp_project/item/bb237b98-22b0-4289-9490-9bb29215fe5e
```

With body: 

```json
{
  "endTime": "1574423241000",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4"
}
```

## Save single log without attachment

We can save logs for test items.
For example let's try to save log for `uploadPlugin` test item.
It is not necessary to save log when test item already finished.
We can create log for test item with `in_progress` status.

Common endpoint: POST `/api/{version}/{projectName}/log`

And it has the following request model:

| Attribute  | Required | Description                                                                                                                  | Default value | Example                                                                                                                                                                   |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| launchUuid | Yes      | Launch UUID                                                                                                                  | -             | e80b62e1-b297-47a0-be22-5a4a25920c0a                                                                                                                                      |
| time       | Yes      | Log time                                                                                                                     | -             | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822);  2019-11-22T11:47:01+00:00 (RFC 3339);  1574423221000 (Unix Timestamp) |
| itemUuid   | No       | Test item UUID                                                                                                               | empty         | fb2a012f-5996-45a0-b3bb-d8210b4fb980                                                                                                                                      |
| message    | No       | Log message                                                                                                                  | empty         | [Forwarding findElement on session 477bee808ca0c415a7aae2de2edc5cc9 to remote] DEBUG o.a.h.c.protocol.RequestAddCookies - CookieSpec selected: default                    |
| level      | No       | Log level. Allowable values: error(40000), warn(30000), info(20000), debug(10000), trace(5000), fatal(50000), unknown(60000) | ?             | error                                                                                                                                                                     |

Response model: 

| Attribute | Required | Example                              |
|-----------|----------|--------------------------------------|
| id        | Yes      | 43f80000-7ca8-4fed-9da3-0759867a847c |

Full request:

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","itemUuid":"22e55c62-d028-4b49-840f-195d7a48b114","time":"1574423245000","message":"An error occurred while connecting to the server [Nested exception is java.lang.NoClassDefFoundError]","level":"error"}' \
     http://rp.com/api/v1/rp_project/log
```

Where body is:

```json
{
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "itemUuid": "22e55c62-d028-4b49-840f-195d7a48b114",
  "time": "1574423245000",
  "message": "An error occurred while connecting to the server [Nested exception is java.lang.NoClassDefFoundError]",
  "level": "error"
}
```

## Batch save logs

It is convenient to send all logs with attachments using only one request.
Let's assume we want to save two logs with attachments (file1.pdf and file2.txt)

To the request model adds one more complex attribute `file` with the following parameters:

| Attribute   | Required | Description       | Default value | Example         |
|-------------|----------|-------------------|---------------|-----------------|
| name        | No       | File name         | -             | report.pdf      |
| content     | No       | Byte array        | -             | -               |
| contentType | No       | File content type | -             | application/pdf |

Response model contains an array of the following objects:

| Attribute      | Required | Description                               | Example                                                                                                                                                                                                                                                                                                                                                                 |
|----------------|----------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id             | No       | UUID of created log                       | 77542c07-970c-481d-ad5a-b4ccd15ae178                                                                                                                                                                                                                                                                                                                                    |
| message (*)    | No       | Exception message if error occurrs        | ReportPortalException: Binary data cannot be saved. There is no request part or file with name lin_av.png                                                                                                                                                                                                                                                               |
| stackTrace (*) | No       | Stack trace of exception if error occurrs | com.epam.ta.reportportal.exception.ReportPortalException: Binary data cannot be saved. There is no request part or file with name lin_av.png\r\n\tat com.epam.ta.reportportal.commons.validation.ErrorTypeBasedRuleValidator.verify(ErrorTypeBasedRuleValidator.java:37)\r\n\tat com.epam.ta.reportportal.ws.controller.LogController.createLog(LogController.java:133) |

`(*)` Fields are present only if error occurred.

Full request:

```shell script
curl --header "Content-Type: multipart/form-data" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --form 'json_request_part=[{"itemUuid":"9c7632a2-272e-4c24-9627-d7d509de7620","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","time":"2019-11-06T15:50:53.187Z","message":"Some critical exception","level": "info","file":{"name":"file1.pdf"}},{"itemUuid":"16fb3d7f-ddce-407a-8e52-464a596e6da1","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4","time":"2019-11-06T15:50:53.187Z","message":"java.lang.NullPointerException","level": "info","file":{"name":"file2.txt"}}]; type=application/json' \
     --form "file=@/path/to/file1.pdf" \
     --form "file=@/path/to/file2.txt" \
     http://rp.com/api/v1/rp_project/log
```

With json body:

```json
[
  {
    "itemUuid": "9c7632a2-272e-4c24-9627-d7d509de7620",
	"launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
	"time": "2019-11-06T15:50:53.187Z",
	"message": "Some critical exception",
	"level": 40000,
	"file": {
	  "name": "file1.pdf"
	}
  },
  {
	"itemUuid": "16fb3d7f-ddce-407a-8e52-464a596e6da1",
	"launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
	"time": "2019-11-06T15:50:53.187Z",
	"message": "java.lang.NullPointerException",
	"level": 40000,
	"file": {
	  "name": "file2.txt"
	}
  }	
]
```

So we successfully reported logs with file attachments and can see in response:

```json
{
  "responses": [
    {
      "id": "ec1b0153-a00e-4c61-b6bf-ac0578c2ed43"
    },
    {
      "id": "b7661cb6-7e1a-40e2-8b96-59de41aa96e8"
    }
  ]
}
```

## Save launch log

It is possible to report log attached to launch.
To do that use the same log endpoint, but in body do not send `itemUuid`

```json
{
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4",
  "time": "2019-11-06T15:50:53.187Z",
  "message": "java.lang.NullPointerException",
  "level": 40000,
  "file": {
    "name": "file2.txt"
  }
}
```

The same way we can report all the rest test items.

## Finish root(suite) item

Finishing root item can be done the same way as [finish parent item](#finish-parentcontainer-item) and [finish child item](#finish-child-item).
But we should specify its uuid in request parameter.

```shell script
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request PUT \
     --data '{"endTime":"1574423247000","launchUuid":"96d1bc02-6a3f-451e-b706-719149d51ce4"}' \
     http://rp.com/api/v1/rp_project/item/1e183148-c79f-493a-a615-2c9a888cb441
```

```json
{
  "endTime": "1574423247000",
  "launchUuid": "96d1bc02-6a3f-451e-b706-719149d51ce4"
}
```

## Finish launch

When we finished all test items, it's time to finish launch.
Endpoint:

PUT `/api/{version}/{projectName}/launch/{launchUuid}/finish`

Finish request model:

| Attribute   | Required | Description                                                                                     | Default value                       | Examples                                                                                                                                                                |
|-------------|----------|-------------------------------------------------------------------------------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| endTime     | Yes      | Launch end time                                                                                 | -                                   | 2019-11-22T11:47:01+00:00 (ISO 8601); Fri, 22 Nov 2019 11:47:01 +0000 (RFC 822, 1036, 1123, 2822); 2019-11-22T11:47:01+00:00 (RFC 3339); 1574423221000 (Unix Timestamp) |
| status      | No       | Launch status. Allowable values: "passed", "failed", "stopped", "skipped", "interrupted", "cancelled" | calculated from children test items | failed                                                                                                                                                                  |
| description | No       | Launch description. Overrides description on start                                              | empty                               | service test                                                                                                                                                            |
| attributes  | No       | Launch attributes. Pairs of key and value. Overrides attributes on start                        | empty                               |                                                                                                                                                                         |

Finish response model

| Attribute | Required | Description       | Example                                         |
|-----------|----------|-------------------|-------------------------------------------------|
| id        | Yes      | Launch UUID       | 6f084c4d-edb5-4691-90ba-d9e819ba61ba            |
| number (*)| No       | Launch number     | 1                                               |
| link (*)  | No       | UI link to launch | http://rp.com/ui/#rp_project/launches/all/73336 |

`(*)` - In case async endpoint field is missing or empty 

Full request:

```shell script
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request PUT \
     --data '{"endTime":"1574423255000"}' \
     http://rp.com/api/v1/rp_project/launch/96d1bc02-6a3f-451e-b706-719149d51ce4/finish
```

Where body is: 

```json
{
  "endTime": "1574423255000"
}
```

## [Example](https://github.com/ihar-kahadouski/dev-guide/tree/master/bash-example)
