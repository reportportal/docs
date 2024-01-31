---
sidebar_position: 1
sidebar_label: pytest
---

# ReportPortal pytest Integration

There is an agent to integrate [pytest](https://docs.pytest.org/en/7.3.x/) with ReportPortal.

Pytest is a popular testing framework for Python applications. One of its advantages is the ability to run tests automatically without the manual configuration.

## Installation

To install pytest plugin execute next command in a terminal:

```python
    pip install pytest-reportportal
```

Look through the CONTRIBUTING.rst for contribution guidelines.

## Configuration

Prepare the config file `pytest.ini` in root directory of tests or specify
any one using pytest command line option:

```python
    py.test -c config.cfg
```

The `pytest.ini` file should have next mandatory fields:

- `rp_api_key` - value could be found in the User Profile section
- `rp_project` - name of project in ReportPortal
- `rp_endpoint` - address of ReportPortal Server

Example of `pytest.ini`:

```python
    [pytest]
    rp_api_key = fb586627-32be-47dd-93c1-678873458a5f
    rp_endpoint = http://192.168.1.10:8080
    rp_project = user_personal
    rp_launch = AnyLaunchName
    rp_launch_attributes = 'PyTest' 'Smoke'
    rp_launch_description = 'Smoke test'
    rp_ignore_attributes = 'xfail' 'usefixture'
```

- The `rp_api_key` can also be set with the environment variable `RP_API_KEY`. This will override the value set for `rp_api_key` in pytest.ini

The following parameters are optional:

- `rp_client_type = SYNC` - Type of the under-the-hood ReportPortal client implementation. Possible values: [SYNC, ASYNC_THREAD, ASYNC_BATCHED].
- `rp_launch = AnyLaunchName` - launch name (could be overridden by pytest --rp-launch option, default value is 'Pytest Launch').
- `rp_launch_id = xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` - id of the existing launch (the session will not handle the lifecycle of the given launch).
- `rp_launch_attributes = 'PyTest' 'Smoke' 'Env:Python3'` - list of attributes for launch.
- `rp_launch_description = 'Smoke test'` - launch description (could be overridden by pytest --rp-launch-description option, default value is '').
- `rp_launch_timeout = 86400` - Maximum time to wait for child processes finish, default value: 86400 seconds (1 day).
- `rp_launch_uuid_print = True` - Enables printing Launch UUID on test run start. Default `False`.
- `rp_launch_uuid_print_output = stderr` - Launch UUID print output. Default `stdout`. Possible values: [stderr, stdout].
- `rp_parent_item_id = xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` - id of the existing test item for session to use as parent item for the tests (the session will not handle the lifecycle of the given test item).
- `rp_tests_attributes = 'PyTest' 'Smoke'` - list of attributes that will be added for each item in the launch.
- `rp_connect_timeout = 15` - Connection timeout to ReportPortal server. Default value is "10.0".
- `rp_read_timeout = 15` - Response read timeout for ReportPortal connection. Default value is "10.0".
- `rp_log_batch_size = 20` - size of batch log request.
- `rp_log_batch_payload_size = 65000000` - maximum payload size in bytes of async batch log requests.
- `rp_log_level = INFO` - The log level that will be reported.
- `rp_log_format = [%(levelname)7s] (%(name)s) %(message)s (%(filename)s:%(lineno)s)` - Format string to be used for logs sent to the service.
- `rp_ignore_attributes = 'xfail' 'usefixture'` - Ignore specified pytest markers.
- `rp_is_skipped_an_issue = False` - Treat skipped tests as required investigation. Default `True`.
- `rp_hierarchy_dirs_level = 0` - Directory starting hierarchy level (from pytest.ini level) (default `0`).
- `rp_hierarchy_dirs = True` - Enables hierarchy for tests directories, default `False`. Doesn't support 'xdist' plugin.
- `rp_hierarchy_dir_path_separator` - Path separator to display directories in test hierarchy. In case of empty value current system path separator will be used (os.path.sep).
- `rp_hierarchy_code` - Enables hierarchy for inner classes and parametrized tests, default `False`. Doesn't support 'xdist' plugin.
- `rp_issue_system_url = https://bugzilla.some.com/show_bug.cgi?id={issue_id}` - issue URL (issue_id will be filled by parameter from pytest mark).
- `rp_issue_id_marks = True` - Enables adding marks for issue ids (e.g. "issue:123456").
- `rp_verify_ssl = True` - Verify SSL when connecting to the server.
- `rp_mode = DEFAULT` - DEBUG or DEFAULT launch mode. DEBUG launches are displayed in a separate tab and not visible to anyone except owner.
- `rp_thread_logging` - EXPERIMENTAL - Enables support for reporting logs from threads by patching the builtin Thread class. Use with caution.
- `rp_api_retries = 0` - Amount of retries for performing REST calls to RP server.

If you like to override the above parameters from command line, or from CI environment based on your build, then pass `-o "rp_launch_attributes=Smoke Tests"` during invocation.

## Examples

For logging of the test item flow to ReportPortal, please, use the python
logging handler provided by plugin like bellow:

in conftest.py:

```python
    import logging
    import sys

    import pytest

    from reportportal_client import RPLogger


    @pytest.fixture(scope="session")
    def rp_logger():
        logger = logging.getLogger(__name__)
        logger.setLevel(logging.DEBUG)
        logging.setLoggerClass(RPLogger)
        return logger
```

in tests:

```python

    # In this case only INFO messages will be sent to the ReportPortal.
    def test_one(rp_logger):
        rp_logger.info("Case1. Step1")
        x = "this"
        rp_logger.info("x is: %s", x)
        assert 'h' in x

        # Message with an attachment.
        import subprocess
        free_memory = subprocess.check_output("free -h".split())
        rp_logger.info(
            "Case1. Memory consumption",
            attachment={
                "name": "free_memory.txt",
                "data": free_memory,
                "mime": "application/octet-stream",
            },
        )

        # This debug message will not be sent to the ReportPortal.
        rp_logger.debug("Case1. Debug message")
```

Plugin can report doc-strings of tests as `descriptions`:

```python
    def test_one():
        """
        Description of the test case which will be sent to ReportPortal
        """
        pass
```

Pytest markers will be attached as `attributes` to ReportPortal items.
In the following example attributes 'linux' and 'win32' will be used:

```python
    import pytest

    @pytest.mark.win32
    @pytest.mark.linux
    def test_one():
        pass
```

If you don't want to attach specific markers, list them in `rp_ignore_attributes` parameter.

## Launching

To run test with ReportPortal you must provide '--reportportal' flag:

```python
    py.test ./tests --reportportal
```

## Test issue info

Some pytest marks could be used to specify information about skipped or failed test result.

The following mark fields are used to get information about test issue:

- `issue_id` - issue id (or list) in tracking system. This id will be added as comment to test fail result. If URL is specified in pytest ini file (see `rp_issue_system_url`), id will added as link to tracking system.
- `reason` - some comment that will be added to test fail description.
- `issue_type` - short name of RP issue type that should be assigned to failed or skipped test.

Example:

```python
    @pytest.mark.issue(issue_id="111111", reason="Some bug", issue_type="PB")
    def test():
        assert False
```

## Send attachment (screenshots)

https://github.com/reportportal/client-Python#send-attachment-screenshots

## Test internal steps, aka "Nested steps"

To implement Nested steps reporting please follow our guide:

https://github.com/reportportal/client-Python/wiki/Nested-steps

Also, there are examples of usage:

* https://github.com/reportportal/examples-python/blob/master/pytest/tests/test_nested_steps.py
* https://github.com/reportportal/examples-python/blob/master/pytest/tests/test_nested_steps_ui.py

## Troubleshooting

If you would like to temporary disable integrations with ReportPortal just
deactivate `pytest_reportportal` plugin with command like:

```python
    py.test -p no:pytest_reportportal ./tests
```
