## Log data import to Report Portal

Import functionality gives opportunity to upload log files via UI.
To start import you should hit the 'Import' button on the Launch page (All Launches tab). In a new popup window **'Import Launch'** you can drop files or add  them by add link.

Report Portal firstly checks files size and format. Importing files should be met following requirements:
* File format is zip archive.
* Files size is up to 32Mb.

If file format is incorrect, it is marked with the red color and the reason is shown on a tool tip when hover the file on popup window.  In case of any incorrect file you cannot run process of import.

Otherwise if all of added files are correct you may hit 'Import' or 'Cancel' button:
* Cancel closes popup window without any operation under log files. 
* Import starts copying files into RP file storage and disables 'Import' button. 

System starts copying into RP file storage if files are met following requirements: 
* File format is zip archive.
* Files size is up to 32Mb.
* Xml files have JUnit structure in zip archive.

System copying valid xml files into RP file storage and marked them with the green color on a Import pop up window.

If files from zip archive have other formats than xml, the system skips them.

If xml file has not JUnit structure, system interrupts process of copying and marks file with the red color. The reason is shown on tool tip when hover the file on popup window. 

>**Note:**
files that were copied earlier stay in RP file storage

When all of valid log files are downloaded and processed then 'OK' button is enabled. 'OK' button closes the Import launches popup window. Zip archive is deleted after the Import is finished or canceled.

You can interrupt import in UI only when files are being downloaded into RP file storage. In this case you should hit the 'Cancel' button (or cross button on a pop up window) and confirm the cancellation of import and then hit the 'Cancel' button again.

Import performs as a regular import via API as well.  Link to the import via API configuration.