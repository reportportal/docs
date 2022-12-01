## Import data to ReportPortal

Import functionality gives the opportunity to upload log files via UI.
To start the import process, you should hit the 'Import' button on the Launch page (All Launches tab). In a new pop-up window **'Import Launch'** you can drop files or add them by adding a link.

ReportPortal checks file size and format first. Imported files should meet the following requirements:
* File format is zip archive or XML file.
* File size is up to 32Mb.
* Timestamp format is 2022-11-17T10:15:43

If the file format is incorrect, it is marked in red and the reason is shown in the tooltip on hovering over the file in the pop-up window. This is to prevent any incorrect files from being run through the import process.

If all the files added are correct you may hit the 'Import' or 'Cancel' buttons:
* The Cancel button closes the pop-up window without any operation under log files.
* The Import button starts copying files into the RP file storage and disables the 'Import' button.

The System will start copying files into the RP file storage if the files meet the following requirements:
* The File format is a zip archive.
* The File size is up to 32Mb.
* The XML files must have the JUnit structure in the zip archive.

The system copies valid XML files into RP file storage and marked them in green in the Import pop-up window.

If files from the zip archive have formats other than XML, the system will skip them.

If the XML file is not in the JUnit structure, the system will interrupt the process of copying and mark the file in red. The reason is then shown on the tooltip when hovering the file in the pop-up window.

>**Note:**
Files that were copied earlier stay in the RP file storage

When all of the valid log files are downloaded and processed the 'OK' button is enabled. The 'OK' button closes the Import launches pop-up window. The Zip archive is then deleted after the Import is finished or canceled.

[ ![Image](Images/userGuide/import/import.png) ](https://youtu.be/238DO03guaA)

You can only interrupt the import in UI when files are being downloaded into the RP file storage. In this case, you should hit the 'Cancel' button (or X button in the pop-up window) and confirm the cancellation of import and then hit the 'Cancel' button again.

[ ![Image](Images/userGuide/import/import-break.png) ](https://youtu.be/Qf_vY0J7xGA)

### Import via API

The details about import via API you can find on the ReportPortal menu at the bottom: API -> launch controller -> Import junit xml report

[ ![Image](Images/userGuide/import/ImportJunitXMLReport.png) ](Images/userGuide/import/ImportJunitXMLReport.png)