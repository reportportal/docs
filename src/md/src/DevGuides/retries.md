# Retries reporting

Some frameworks allow to retry `Test` execution according to provided conditions (TestNG) or just retry it predefined number of times.
First execution is a simple `TestItem` and next ones are called `Retries`.
In Report Portal these items are grouped and displayed as a sequence of executions for the same `Test`:

![](/src/Images/devguide/retry/retry.png)

When you can click on the `retries` link and switch between `Retries` seeing logs:

![](/src/Images/devguide/retry/retry_switch.png)

On the `Log view` you can also switch between `Retries`:

![](/src/Images/devguide/retry/retry_view.png)

## Retries reporting

Common child `Test item` request ([check reporting dev guide](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/reporting.md)) looks like: 

```shell
curl --header "Content-Type: application/json" \
     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \
     --request POST \
     --data '{"name":"example step","startTime":"1574423237000","type":"step","launchUuid":"<launch uuid>","description":"Item that should be retried"}' \
     http://rp.com/api/v1/rp_project/item/<parent uuid>
```

With body:

```json
{
  "name": "example step",
  "startTime": "1574423237000",
  "type": "step",
  "launchUuid": "<launch uuid>",
  "description": "Item that should be retried"
}
```

And response:

```json
{
  "id": "uuid-of-the-first-step"
}
```

Request for a `retry` looks the same, but has field `retry=true`:

```json
{
  "name": "example step",
  "startTime": "1574423237100",
  "type": "step",
  "launchUuid": "<launch uuid>",
  "description": "Item that should be retried",
  "retry": true
}
```

To be displayed as a `retry` reported `Test item` should have the same `name`, `parentUuid`, `launchUuid` and `uniqueId` (if you provided it explicitly).
Also `Test item` with type `Suite` cannot be reported as a `retry`.

In Report Portal the only `Test item` from the `Retries` group that has statistics and can have an `issue` attached is the one with max `startTime`.
In previous requests `startTime` was `1574423237000` for the first one and `1574423237100` for the second one, so the second one is a 'main' `Test Item`
with statistics and `issue` (if attached).  