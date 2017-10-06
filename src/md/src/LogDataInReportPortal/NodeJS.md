### Node.js Client (JavaScript)

Only Cucumber listener is available at the moment, and it was tested only in **Protractor/Cucumber combo** (although it should work in vanilla Cucumber-JS as well).

#### Installation

To install directly from Git, run

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ powershell
npm install git+<HTTPS or SSH repository URL>.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To install from local path, clone repository and run

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ powershell
npm install <local path>.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See *npm -?* for more details.

Cucumber listener can be enabled by adding to world.js something like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ javascript
this.registerListener(require('node-rp-client').Cucumber({}));
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#### Configuration

Create reportportal.json in the working directory or specify desired config file in the environment variable rp_config (again, relative to the working directory).

The following properties are supported:

-   username - ReportPortal username (string, required)
-   password - ReportPortal password (string, required)
-   endpoint - ReportPortal API endpoint (string, required)
-   launch - launch name (string, required)
-   project - project name (string, required)
-   mode - launch mode ("DEFAULT" or "DEBUG", optional, defaults to "DEFAULT")
-   tags - launch tags (array of strings, optional)
-   root_folder - name (not path!) of the folder where all tests are located (string, optional)

Each of these settings can be overridden by an environment variable with the same name and 'rp_' prefix (e.g. 'rp_username' for 'username'). Environment variables take precedence over JSON configuration. 'tags' property is parsed as JSON array (i.e. it has to be defined like this: set rp_tags=["xxx", "yyy", "zzz"]); all other properties are used literally.

**Important notes:**

1. Certificate verification is disabled in HTTPS agent because I do not have enough time left to figure how to supply the whole certificate chain to the client. If you know how of are willing to investigate, please do fix this security hole.

2. As of the date of writing this, the latest version of node-rest-client, 1.4.3, (one of this module's dependencies) is unable to send binary data in HTTP requests which is required to upload attachments such as screenshots. The workaround is provided in [this pull request](https://github.com/aacerox/node-rest-client/pull/58); until it is merged, attachments will appear corrupted in ReportPortal.

To use ReportPortal client while this pull request is not merged, the following workaround can be taken:

- install patched REST client using *npm install git+* [https://github.com/nebehr/node-rest-client.git#write-buffers](https://github.com/nebehr/node-rest-client.git#write-buffers)
- now install ReportPortal client as described above. Since REST client is already installed, the patch will not be overwritten.

