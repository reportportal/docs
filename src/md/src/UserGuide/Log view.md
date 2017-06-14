Log view
---------

### Log messages

All the related data for the test case (logs, screenshots) will be saved on Log level. To see table with log messages, navigate to the lowest level. 

Log object has the following levels:

>   Error

>   Debug

>   Warn

>   Info

>   Trace

The table with log messages is painted in different colors depending on the log
type:

>   red - for failed log steps

>   green - for log steps with positive validation made

>   blue - for system messages

Error logs are always highlighted in red. The others are highlighted on mouse
hover only.

Logs with *Trace*, *Debug*, *Error* labels are collapsed, if the log has more
than 5 lines. You can expand log message clicking on special "Expand"
button.

You can use quick filter for logs view to find *Error*, *Debug*, *Warn*, *Info*, *Trace* logs and logs with screenshots.

Also you can use the logs sorting by time, and filtering logs to find the certain message in logs.

[ ![Image](Images/userGuide/logView/logMessages.png) ](https://youtu.be/Mcqh7ktK1Oc)


### Navigate to the next/previous logs

You can navigate from one log to the other using "Next"/"Previous" buttons on the Log view.


[ ![Image](Images/userGuide/logView/logNavigation.png) ](Images/userGuide/logView/logNavigation.png)


Navigation takes into account selected by user filter and hidden preconditions methods on Step view.



### Gallery with screenshots

The system allows viewing a gallery block with screenshots for the failed steps.

In order to see the screenshots gallery, navigate to the Log level and click
on a picture thumbnail.

Gallery thumbnails are not visible if no screenshots exist.

The gallery with screenshots will be opened. You can open a full size picture by clicking at the main box. The main picture box
will show a scaled picture.

You can scroll gallery using "Next" and "Previous" buttons and jump to the source of this fail on log.

You can change screenshot orientation for the current screenshot, using "Change
orientation" icon.

[ ![Image](Images/userGuide/logView/screenshotGallery.png) ](https://youtu.be/8DUdwG-SdWA)
