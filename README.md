# Report Portal documentation

## Local development

To see and develop the documentation locally please follow the next steps:

**Pre requirements:**
_[Git](https://git-scm.com/downloads)_ and _[Node.js](https://nodejs.org/en/blog/release/v14.19.3/)_ (version 14 is recommended) must be installed.

You can use any code editor that you like (f.e. open-sourced [vscode](https://code.visualstudio.com/)).

### Run locally

Open the terminal from desired directory and run the following commands:

1. Clone the remote repository:
```bash
git clone https://github.com/reportportal/documentation.git
```

2. Go to the repository root folder:
```bash
cd documentation
```

3. Fetch latest repository changes:
```bash
git fetch
```

4. Checkout to branch

4.1 Checkout to existing branch (if it's already created on GitHub):
```bash
git checkout my-branch
```

4.2 Checkout to the new branch from develop (if not exists):
```bash
git checkout -b my-branch origin/develop
```

Now the workspace is ready to add changes.

5. Install the dependencies:
```bash
npm install
```

6. To run the builder in the developer mode run:
```bash
npm run develop
```

Open another terminal window and execute:
```bash
npm run server
```
to run the web server.

Now the documentation is available in browser via [http://localhost:9020/documentation.html](http://localhost:9020/documentation.html).

To see documentation via landing, it should be served locally and it requires additional steps.

Open the terminal from desired directory and run the following commands:

1. Clone the remote repository:
```bash
git clone https://github.com/reportportal/reportportal.github.io.git
```

2. Go to the repository root folder:
```bash
cd reportportal.github.io
```

3. Install the dependencies:
```bash
npm install
```

4. Run the development server with local proxy to documentation:
```bash
npm run dev:local:documentation
```
Now the documentation is available in browser via [http://localhost:9000/docs](http://localhost:9000/docs) on the landing page.

### Commit and push changes

When some changes are ready to code review, follow the next steps in documentation repo:

1. Add changes to be staged for commit:
```bash
git add <path-to-folder/file>
```

2. Commit changes:
```bash
git commit -m "commit_message"
```

3. Push changes to GitHub:
```bash
git push origin my-branch
```

4. Create a new Pull Request on GitHub to `develop` branch & add reviewers.
Once PR will be merged to `develop` branch, the changes will be published to dev instance.

## Structure
* Path for pictures: src/Images/. Each picture should be stored in a folder with the same name as the documentation section.
* Path for MD files: src/md/src/. Each section is located in the folder of the same name.
In the section there is a main file (index.md) and files of subsections.

>**Note**
The first level header can only be contained in the main file(index.md) in a single instance.
Subsections files can have headers of the second and higher level.

## Guide

### Add new section to navigation

Open file `src/md/pages/documentation.hbs`.

Add new line in the list with necessary doc file in the following way:

`'src/computeds/md/src/{sectionFolderName}/index.md'`
>**Note**
The section order is important.

Subsection can be added in the same way with corresponding folder, file name and indentation.

### Block image
To display the picture, use the following syntax:
```$xslt
[ ![ImageName](thumbImagePatch) ](imageOrYoutubePath)
```
* ImageName - the name of the image that will be displayed if there are errors during the download.

* thumbImagePath - the address of the picture that will be displayed when the documentation is displayed. 
There should be certain sizes of 1000x768.
For example: 'Images/userGuide/manageLaunches/MergeScheme.png'

* imageOrYoutubePath - the name of the image or link to youtube which will be shown when clicking on the picture.
For example 'Images/userGuide/manageLaunches/MergeScheme.png' or 'https://youtu.be/7PZIowd9III'

### Block note
To display the block 'Note', use the following syntax:
```$xslt
>**Note:**
yout note text
```
