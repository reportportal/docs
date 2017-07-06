### Cucumber

#### Installation and usage

There are several options to use Cucumber formatter:

-  Add *gem 'yarpc'* to your *Gemfile* and point either to locally cloned YARPC
    sources or to Git repository (refer to Bundler documentation for more
    details):

*gem 'yarpc', :path => '<local path to sources>'*

or

*gem 'yarpc', :git => '<URL to Git repo>'*

Then run Cucumber with -f/--format switch:

*cucumber <other options> -f YARPC::Cucumber::Formatter*

-  Clone Git repository to some local folder and require yarpc.rb in Cucumber command line:

*cucumber <other options> -r <local path to sources>\lib\yarpc.rb -f YARPC::Cucumber::Formatter*

#### Configuration

Create report\_portal.yml configuration file in one of the following folders of
your Cucumber project: '.', './.config', './config' (see
report\_portal.yaml.example). Alternatively specify path to configuration file



| **Property**             | **Description**      |
|--------------------------|----------------------|
| username                 | ReportPortal username|
| password                 | ReportPortal password|             
| endpoint                 | ReportPortal endpoint|      
| launch                   | launch name          |        
| project                  | project name         |
| tags                     | array of tags for the launch|
| group_by_folder          | set to true to enable grouping by folder (feature folders will be represented as nested suites in ReportPortal. Not fully supported yet by ReportPortal UI). In single-threaded mode folder suites are closed when all their children are closed. In parallel mode (with YARPCParallel formatter) all folder suites remain open until the very end, and are closed along with the launch.|   
| debug_mode               | set to true to mark the launch as 'DEBUG'            |
| thread_cool_off_timeout  | timeout in seconds for the last thread in the bunch to wait for other threads to start. If no new threads start during this interval, the launch is closed. Launches via parallel_tests do not need this parameter because no new threads will be started when the old ones are completed; however it may be useful to group together the results of several independent CI jobs.|
| disable_ssl_verification | set to true to disable SSL verification on connect to ReportPortal (potential security hole!) In single-threaded mode folder suites are closed when all their children are closed. In parallel mode (with ParallelFormatter) all folder suites remain open until the very end, and are closed along with the launch.|
| use_standard_logger      | set to true to enable logging via standard Ruby Logger class to ReportPortal. Note that log messages are transformed to strings before sending.


Each of these settings can be overridden by an environment variable with the same name and 'rp.' prefix (e.g. 'rp.username' for 'username').

#### Usage

Run Cucumber with -f/--format switch:

*cucumber <other options> -f RP::Cucumber::YARPC*

#### Supported events

-   before\_features (start launch)

-   after\_features (finish launch)

-   before\_feature (start feature suite and suites for its parent folders if
    group\_by\_folder == true)

-   after\_feature (finish feature suite and suites for its parent folders if
    group\_by\_folder == true unless there are other unfinished features in
    them)

-   before\_feature\_element (start test (either scenario or scenario outline))

-   after\_feature\_element (finish test)

-   before\_step (start test step for regular scenario)

-   after\_step (finish test step for regular scenario)

-   before\_table\_row (start test step for example row of scenario outline)

-   after\_table\_row (finish test step for example row of scenario outline)

-   puts

-   embed

-   exception

**Notes:**

1. Steps of scenario outlines are always reported as 'Passed'; the actual pass/fail status is reported for individual example rows.

2. Background steps are reported within the scenarios as 'BEFORE\_TEST' items.

#### Logging

Experimental support for three common logging frameworks was added:

-   Logger (part of standard Ruby library)

-   [Logging](<https://rubygems.org/gems/logging>)

-   [Log4r](<https://rubygems.org/gems/log4r>)

To use Logger, set use\_standard\_logger parameter to true (see Configuration
chapter). For the other two corresponding appenders/outputters are available
under yarpc/logging.

#### Parallel formatter

YARPC::Cucumber::ParallelFormatter can be used instead for tests started via
parallel\_tests gem.

>   To facilitate parallel reporting from independent processes (as is the case with
>   parallel\_tests gem), ParallelFormatter formatter creates
>   'parallel\_launch\_id.lck' and a number of 'parallel\_launch\_process\*.lck'
>   files in the TEMP directory. If, for whatever reason (e.g. because the previous
>   launch was aborted due to exception), any of these files are present when new
>   launch is invoked, results may be reported incorrectly.

**Notes:**

1. Rows of scenario outlines are reported as individual scenarios with row
    number in brackets.

2. To get more readable logs for scenario outlines, start Cucumber with
    -x/--expand switch. However, even in this case log messages for outlines may
    appear in wrong order - this is due to Cucumber limitations and will not be
    fixed in YARPC.

3. Without --expand switch, all steps of scenario outlines are reported before
    other log messages, so it is not easy to see which log message belongs to
    which step. This is due to Cucumber limitations and will not be fixed in
    YARPC.

4. Feature background is reported once at the beginning as 'Before Class' item
    and the first scenario does not include background steps. Remaining
    scenarios are 'augmented' with background steps and there are no separate
    'Before Class/Test' items for them. This reflects the way Cucumber actually
    executes scenarios: if the very first background fails, all scenarios in the
    feature are skipped, even though on second iteration this background might
    pass.

5. ReportPortal launch created by YARPC has root test suite as a single direct
    descendant. This is workaround for current ReportPortal UI implementation
    and will be removed when UI 2.0 is deployed.
