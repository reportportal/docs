"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42986],{32411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"quality-gates/IntegrationWithCICD/IntegrationWithGitHubActions","title":"Integration with GitHub Actions","description":"In this tutorial, we will walk you through the process of integrating ReportPortal with GitHub Actions.","source":"@site/docs/quality-gates/IntegrationWithCICD/IntegrationWithGitHubActions.md","sourceDirName":"quality-gates/IntegrationWithCICD","slug":"/quality-gates/IntegrationWithCICD/IntegrationWithGitHubActions","permalink":"/docs/quality-gates/IntegrationWithCICD/IntegrationWithGitHubActions","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/quality-gates/IntegrationWithCICD/IntegrationWithGitHubActions.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Integration with GitHub Actions"},"sidebar":"docs","previous":{"title":"Integration with CircleCI","permalink":"/docs/quality-gates/IntegrationWithCICD/IntegrationWithCircleCI"},"next":{"title":"Integration with GitLab CI","permalink":"/docs/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI"}}');var s=t(74848),o=t(28453);const r={sidebar_label:"Integration with GitHub Actions"},a="Integration with GitHub Actions",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using GitHub Actions workflow file",id:"using-github-actions-workflow-file",level:2},{value:"Define workflow structure and rules",id:"define-workflow-structure-and-rules",level:2},{value:"Getting test secrets",id:"getting-test-secrets",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Kotlin tests",id:"kotlin-tests",level:3},{value:"Python tests",id:"python-tests",level:3},{value:"Setting up Quality Gates integration (optional)",id:"setting-up-quality-gates-integration-optional",level:2},{value:"Getting Launch UUID for Kotlin tests",id:"getting-launch-uuid-for-kotlin-tests",level:3},{value:"Getting Launch UUID for Python tests",id:"getting-launch-uuid-for-python-tests",level:3},{value:"Adding Quality Gates stage",id:"adding-quality-gates-stage",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"integration-with-github-actions",children:"Integration with GitHub Actions"})}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we will walk you through the process of integrating ReportPortal with GitHub Actions."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["To run your tests in any kind of CI, you first need a way to execute them in the\nconsole. For example, for Java this might be calling a build tool like Gradle or Maven\nwith: ",(0,s.jsx)(n.code,{children:"./gradlew test"})," or ",(0,s.jsx)(n.code,{children:"./mvnw test"})," respectively. For Python, it might be\n",(0,s.jsx)(n.code,{children:"pytest"})," command. Your tests should be already ",(0,s.jsx)(n.a,{href:"/log-data-in-reportportal/test-framework-integration/",children:"integrated with a ReportPortal agent"}),". You also need a working ReportPortal instance. We will be using GitHub Actions secrets, to securely get our\ncredentials while the workflow is running, see official ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions",children:"GitHub Docs"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"using-github-actions-workflow-file",children:"Using GitHub Actions workflow file"}),"\n",(0,s.jsxs)(n.p,{children:["We are going to use the ",(0,s.jsx)(n.code,{children:".github/workflows/ci.yml"})," file to store and modify our CI workflow,\nthis file should be hosted in the same Git repository which contains your\ntests. This is the only way to which is used by GitHub Actions to set up\nworkflow configuration. More on Workflow syntax you can find in the official\n",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"define-workflow-structure-and-rules",children:"Define workflow structure and rules"}),"\n",(0,s.jsx)(n.p,{children:"Before running tests, we need to define the steps we want to pass in our workflow.\nThis is the common thing for any language or framework you might use, so let\u2019s\ndo that."}),"\n",(0,s.jsx)(n.p,{children:"First, we need to define workflow triggers to have an ability to run it when you need it, otherwise it will never run.\nSecond, we need to run setup steps, to install necessary libraries. Third, we need run tests with credentials which we\ngot from the GitHub Actions secrets. And forth, enterprise users might also want to utilize our Quality Gates plugin to\nget more control over application-under-test quality, this will be described in the last section of the current article."}),"\n",(0,s.jsx)(n.p,{children:"So, let's start with a basic yaml file skeleton:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: CI Tests\n\non:\n  workflow_dispatch:\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      # Download sources from git repository, a common step for all Actions workflows\n      - name: Checkout repository\n        uses: actions/checkout@v4\n\n      - name: Set up language\n        run: ''\n\n      - name: Install dependencies\n        run: ''\n\n      - name: Test\n        run: ''\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Notice we use the ",(0,s.jsx)(n.code,{children:"workflow_dispatch"})," option to run the job, that means the workflow can only be run manually, through\nworkflow history view."]}),"\n",(0,s.jsx)(n.h2,{id:"getting-test-secrets",children:"Getting test secrets"}),"\n",(0,s.jsx)(n.p,{children:"GitHub supports native secret storage for projects and organizations, the link on the documentation was provided above."}),"\n",(0,s.jsxs)(n.p,{children:["Let's securely store ",(0,s.jsx)(n.code,{children:"RP_ADMIN_PASSWORD"})," and ",(0,s.jsx)(n.code,{children:"RP_DEMO_KEY"})," variables in our project. To set Actions secret variables,\nwe need a project where you have admin rights:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open base project page."}),"\n",(0,s.jsx)(n.li,{children:'Click "Settings" tab.'}),"\n",(0,s.jsx)(n.li,{children:'Expand "Secrets and variables" section in the left menu.'}),"\n",(0,s.jsx)(n.li,{children:'Click "Actions".'}),"\n",(0,s.jsx)(n.li,{children:'In the "Repository secrets" section click "New repository secret" button.'}),"\n",(0,s.jsx)(n.li,{children:"Put Secret Name and Value in the corresponding fields."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For our example we need 2 such variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RP_ADMIN_PASSWORD \u2013 example secret."}),"\n",(0,s.jsx)(n.li,{children:"RP_DEMO_KEY \u2013 another example secret."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After that these secrets will be accessible during workflow run by specifying special placeholder values in workflow,\nE.G. ",(0,s.jsx)(n.code,{children:"${{ secrets.RP_ADMIN_PASSWORD }}"})," or ",(0,s.jsx)(n.code,{children:"${{ secrets.RP_DEMO_KEY }}"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,s.jsx)(n.p,{children:"Let's imagine we need to run our tests on two different languages: Python based\ntests running with pytest and Kotlin based tests running with Gradle. These are\ntwo rather different environments with very different approaches which should\ngive you an idea of how that works."}),"\n",(0,s.jsx)(n.h3,{id:"kotlin-tests",children:"Kotlin tests"}),"\n",(0,s.jsx)(n.p,{children:"Let's imagine that to run our Kotlin tests we need a very specific version of Kotlin. Sine some time in the past GitHub\nActions base images go with pre-installed Kotlin, but we can only use it as is, and can't choose any version. Luckily,\nthere are options how to install specific version of the language."}),"\n",(0,s.jsx)(n.p,{children:'Here is updated the "steps" section of our workflow Yaml with Kotlin installation:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'name: CI Tests\n\non:\n  workflow_dispatch:\n\nenv:\n  KOTLIN_VERSION: \'1.4.32\'\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n\n      - name: Set up Kotlin\n        run: |\n          kotlinc -version\n          rm -rf /usr/share/kotlinc\n          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip\n          unzip /tmp/kotlin-compiler.zip -d /usr/share\n          export PATH="$PATH:/opt/kotlinc/bin"\n          echo "$PATH"\n          kotlinc -version\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, we remove existing Kotlin installation in ",(0,s.jsx)(n.code,{children:"/usr/share/kotlinc"}),", then we download necessary Kotlin\nversion, unzip it to the same place ",(0,s.jsx)(n.code,{children:"/usr/share"})," to make the Kotlin compiler available from any folder in command line,\nsince it was already pre-configured. We also output Kotlin version before and after the installation.\nKotlin version was moved to a variable to ease further workflow updates."]}),"\n",(0,s.jsx)(n.p,{children:"Now, let's run our tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'name: CI Tests\n\non:\n  workflow_dispatch:\n\nenv:\n  KOTLIN_VERSION: \'1.4.32\'\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n\n      - name: Set up Kotlin\n        run: |\n          kotlinc -version\n          rm -rf /usr/share/kotlinc\n          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip\n          unzip /tmp/kotlin-compiler.zip -d /usr/share\n          export PATH="$PATH:/opt/kotlinc/bin"\n          echo "$PATH"\n          kotlinc -version\n\n      - name: Test\n        run: |\n          # Cast execution flag on gradle wrapper script file, just in case\n          chmod +x ./gradlew\n          ./gradlew :service-api:demoSmoke -Prp.api.key=${{ secrets.RP_DEMO_KEY }} -Prp.admin.password=${{ secrets.RP_ADMIN_PASSWORD }}\n'})}),"\n",(0,s.jsx)(n.p,{children:"We run our tests with Gradle wrapper and cast execution flag on runner script\njust in case. We also bypass our secrets through command line parameters to our\nGradle to use later in tests. They won't be exposed, since GitHub Actions will cut them off from the output."}),"\n",(0,s.jsx)(n.h3,{id:"python-tests",children:"Python tests"}),"\n",(0,s.jsxs)(n.p,{children:["Python tests have less configuration complexity, compared to Kotlin. It uses existing Action to install Python and adds\nadditional step to install dependencies. We start with installing required version of  Python: ",(0,s.jsx)(n.code,{children:"3.10.13"}),". In the next\nstep we can install our requirements for the project and run tests in the Test section with ",(0,s.jsx)(n.code,{children:"pytest"})," command."]}),"\n",(0,s.jsx)(n.p,{children:'Here is the updated "test" section of our pipeline Yaml:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: CI Tests\n\non:\n  workflow_dispatch:\n\nenv:\n  PYTHON_VERSION: '3.10.13'\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '${{ env.PYTHON_VERSION }}'\n\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -rrequirements.txt -rrequirements-dev.txt\n\n      - name: Test\n        run: |\n          pytest -sv --reportportal -m \"not command_skip\" -n 2 -o \"rp_api_key=${{ secrets.RP_DEMO_KEY }}\" tests\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, we pass ",(0,s.jsx)(n.code,{children:"RP_DEMO_KEY"})," through the command line, that\u2019s safe, it won't be exposed, since GitHub Actions\nwill cut it off from the output."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-quality-gates-integration-optional",children:"Setting up Quality Gates integration (optional)"}),"\n",(0,s.jsxs)(n.p,{children:["Enterprise users can utilize our Quality Gates plugin to get more\ncontrol over application-under-test quality. To enable and configure Quality Gates plugin on\nReportPortal, please, refer to ",(0,s.jsx)(n.a,{href:"/quality-gates",children:"corresponding documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"ReportPortal's Quality Gates plugin doesn't have native integration with GitHub Actions, so we\nneed to use a custom approach here. One way is polling ReportPortal Launch info API for\na specific value, which the Quality Gates plugin leaves after passing. For that we need Launch\nUUID, which is a unique Launch identifier."}),"\n",(0,s.jsx)(n.h3,{id:"getting-launch-uuid-for-kotlin-tests",children:"Getting Launch UUID for Kotlin tests"}),"\n",(0,s.jsxs)(n.p,{children:["Every Java Agent has specific properties which control Launch UUID printing,\nsince July 2023. To ensure that check if your Agent has\nthe ",(0,s.jsx)(n.code,{children:"com.epam.reportportal:client-java"})," library dependency of version 5.1.23 or\nlate. It\u2019s generally safe to add exclusion and put a newer version of the library\nto get new features. So these properties are: ",(0,s.jsx)(n.code,{children:"rp.launch.uuid.print"})," and\n",(0,s.jsx)(n.code,{children:"rp.launch.uuid.print.output"}),". You can put them into your\n",(0,s.jsx)(n.code,{children:"reportportal.properties"})," file. Enable Launch UUID printing with the property:\n",(0,s.jsx)(n.code,{children:"rp.launch.uuid.print = true"}),". It will output a line like this into the console:\n",(0,s.jsx)(n.code,{children:"ReportPortal Launch UUID: 61ce1c26-842a-4bde-9abe-a4696e31d626"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Our tests use Gradle to build and run them, unlike other build systems Gradle\nusually hides test output streams and just prints truncated stack trace in case\nof test failures, so we need to tell it not to do that. This is possible if you\nput the following section somewhere into your Gradle test task:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"testLogging {\n  showStandardStreams = true\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, we need to save this UUID to an environment variable which we latter will\nuse in a separate stage in polling ReportPortal API. GitHub Actions allow this with a ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable",children:"specific command\n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'Here is the updated "test" stage which does these things:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'name: CI Tests\non:\n  workflow_dispatch:\nenv:\n  KOTLIN_VERSION: \'1.4.32\'\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n      - name: Set up Kotlin\n        run: |\n          kotlinc -version\n          rm -rf /usr/share/kotlinc\n          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip\n          unzip /tmp/kotlin-compiler.zip -d /usr/share\n          export PATH="$PATH:/opt/kotlinc/bin"\n          echo "$PATH"\n          kotlinc -version\n      - name: Test\n        run: |\n          # Cast execution flag on gradle wrapper script file, just in case\n          chmod +x ./gradlew\n          ./gradlew --console=plain :service-api:demoSmoke -Prp.api.key=${{ secrets.RP_DEMO_KEY }} -Prp.admin.password=${{ secrets.RP_ADMIN_PASSWORD }} | tee ./console.log || true\n          sed -rn \'s/ReportPortal Launch UUID: ([^\\\\r\\\\n]+)/LAUNCH_UUID=\\1/ p\' ./console.log  >> "$GITHUB_ENV"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Some explanations here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We used the ",(0,s.jsx)(n.code,{children:"--console=plain"})," Gradle parameter to make output suitable for saving in a file."]}),"\n",(0,s.jsxs)(n.li,{children:["To preserve console output, we used the ",(0,s.jsx)(n.code,{children:"tee"})," command, which copies standard input to each specified file, and to standard output."]}),"\n",(0,s.jsxs)(n.li,{children:['We need to configure our "test" stage not to fail in case of unsuccessful tests, since we are going to decide about test status on the Quality Gates step. This is done by adding the ',(0,s.jsx)(n.code,{children:" || true"})," suffix to test run command."]}),"\n",(0,s.jsxs)(n.li,{children:["We used the ",(0,s.jsx)(n.code,{children:"sed"})," command to format and print our Launch UUID."]}),"\n",(0,s.jsxs)(n.li,{children:["Thus, we got a preformatted string and write it to ",(0,s.jsx)(n.code,{children:"$GITHUB_ENV"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The last step that creates or updates the environment variable does not have access to the new value, but all subsequent\nsteps in a job will have access."}),"\n",(0,s.jsx)(n.h3,{id:"getting-launch-uuid-for-python-tests",children:"Getting Launch UUID for Python tests"}),"\n",(0,s.jsxs)(n.p,{children:["ReportPortal pytest agent has specific properties which control Launch UUID printing,\nsince version 5.2.2: ",(0,s.jsx)(n.code,{children:"rp_launch_uuid_print"})," and ",(0,s.jsx)(n.code,{children:"rp_launch_uuid_print_output"}),".\nYou can put them into your ",(0,s.jsx)(n.code,{children:"pytest.ini"})," file. For this example, we just need\none of them: ",(0,s.jsx)(n.code,{children:"rp_launch_uuid_print = True"}),". It will output a line like this\ninto the console:\n",(0,s.jsx)(n.code,{children:"ReportPortal Launch UUID: 61ce1c26-842a-4bde-9abe-a4696e31d626"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, we need to save this UUID to an environment variable which we later will\nuse in a separate stage in polling ReportPortal API. GitHub Actions allow this with a ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable",children:"specific command\n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'Here is the updated "test" stage which does these things:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: CI Tests\non:\n  workflow_dispatch:\nenv:\n  PYTHON_VERSION: '3.10.13'\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '${{ env.PYTHON_VERSION }}'\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -rrequirements.txt -rrequirements-dev.txt\n      - name: Test\n        run: |\n          pytest -sv --reportportal -m \"not command_skip\" -n 2 -o \"rp_api_key=${{ secrets.RP_DEMO_KEY }}\" tests | tee ./console.log || true\n          sed -rn 's/ReportPortal Launch UUID: ([^\\\\r\\\\n]+)/LAUNCH_UUID=\\1/ p' ./console.log  >> \"$GITHUB_ENV\"\n"})}),"\n",(0,s.jsx)(n.p,{children:"Some explanations here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To preserve console output, we used the ",(0,s.jsx)(n.code,{children:"tee"})," command, which copies standard input to each specified file, and to standard output."]}),"\n",(0,s.jsxs)(n.li,{children:['We need to configure our "test" stage not to fail in case of unsuccessful tests, since we are going to decide about test status on the Quality Gates step. This is done by adding the ',(0,s.jsx)(n.code,{children:" || true"})," suffix to test run command."]}),"\n",(0,s.jsxs)(n.li,{children:["We used the ",(0,s.jsx)(n.code,{children:"sed"})," command to format and print our Launch UUID."]}),"\n",(0,s.jsxs)(n.li,{children:["Thus, we got a preformatted string and write it to ",(0,s.jsx)(n.code,{children:"$GITHUB_ENV"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-quality-gates-stage",children:"Adding Quality Gates stage"}),"\n",(0,s.jsx)(n.p,{children:"If you did your pipeline configuration in the same manner as in this article\nthis step will be the same for you, no matter which language do you use."}),"\n",(0,s.jsxs)(n.p,{children:["First, we need to add the ",(0,s.jsx)(n.code,{children:"quality-gate"})," step to our pipeline:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  build:\n    steps:\n      - ...\n      - name: Quality Gate\n        run: |\n          ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"It's time to finish our workflow, this step will be a rather complex one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'env:\n  RP_INSTANCE: \'https://demo.reportportal.io\'\n  SCRIPT_TIMEOUT_SECONDS: 60\n  REQUEST_TIMEOUT_SECONDS: 60\n\njobs:\n  build:\n    steps:\n      - ...\n      - name: Quality Gate\n        run: |\n          echo "Quality gate"\n          echo "LAUNCH_UUID: $LAUNCH_UUID"\n          QUALITY_GATE_STATUS=""\n          START_TIME=$(date +%s)\n          while ( [ -z "$QUALITY_GATE_STATUS" ] || [ "$QUALITY_GATE_STATUS" == "UNDEFINED" ] ) && [ $(( $(date +%s) - START_TIME )) -lt ${{ env.SCRIPT_TIMEOUT_SECONDS }} ]; do\n            echo "Waiting for quality gate status..."\n            sleep 10\n            QUALITY_GATE_JSON=$(curl -s -H "Authorization: Bearer ${{ secrets.RP_DEMO_KEY }}" --max-time "${{ env.REQUEST_TIMEOUT_SECONDS }}" "${{ env.RP_INSTANCE }}/api/v1/report_portal_demo/launch/${LAUNCH_UUID}")\n            QUALITY_GATE_STATUS=$(echo "$QUALITY_GATE_JSON" | jq -r \'.metadata.qualityGate.status // empty\')\n          done\n          if [ "$QUALITY_GATE_STATUS" != "PASSED" ]; then\n            echo "Quality gate status: $QUALITY_GATE_STATUS"\n            echo "Failing the pipeline."\n            exit 1\n          else\n            echo "Quality gate status: $QUALITY_GATE_STATUS"\n            echo "Pipeline passed."\n          fi\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notice, we added three new environment variables (do not replace, you need to append them to existing values):\nRP_INSTANCE, REQUEST_TIMEOUT_SECONDS, SCRIPT_TIMEOUT_SECONDS. Which are responsible for ReportPortal base URL\nconfiguration, request timeout and polling timeout respectively. In the script we are polling our ReportPortal\ninstance for Launch info with ",(0,s.jsx)(n.code,{children:"curl"})," and Launch UUID variable, which we got in the previous\nstep. After that with ",(0,s.jsx)(n.code,{children:"jq"})," we are trying to read a specific field in response\nJSON or return empty value if Quality Gate is not passed yet, or request is failed. In\ncase of an empty response, we retry our call to ReportPortal. Finally, we compare ",(0,s.jsx)(n.code,{children:"jq"}),'\noutput with "PASSED" literal and if it\u2019s equal we quit gracefully, or we fail\nthe step in any other case.']}),"\n",(0,s.jsx)(n.p,{children:"And we are finally done!"}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"ReportPortal does not have native integration with GitHub Actions, but that\u2019s not something that\nmight stop you. In this article we set up GitHub Actions integration with ReportPortal using\nshell scripts and console commands. To provide more outlook we described how to run tests in Kotlin and Python."}),"\n",(0,s.jsx)(n.p,{children:"And here are full versions of corresponding pipeline files, which we implemented:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/reportportal/examples-java/blob/master/.gitlab-ci.yml",children:"Kotlin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/reportportal/examples-python/blob/master/.gitlab-ci.yml",children:"Python"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);