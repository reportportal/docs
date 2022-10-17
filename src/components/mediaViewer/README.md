## **Media viewer**

### Description:

Media viewer with possibility of opening images/video in new modal.
Thumbnails or other resources should be in 'static/img' folder.
If there is no thumbnail, src will be used instead. For example, for images only src can be provided.
Type can be 'photo' or 'video'.
All static must be in 'static' folder.

### Props:

- **src**: _string_, required
- **thumbnail**: _string_, required
- **type**: _string_, required
- **alt**: _string_, optional, default=''
