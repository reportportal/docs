## **Media viewer**

### Description:

Media viewer with possibility of opening images/video in new modal.
If there is no thumbnail, src will be used instead. For example, for images only src can be provided.
Type can be 'image' or 'video'.

### Props:

- **src**: _string_ or _object_, required
- **thumbnail**: _string_, optional, default=''
- **type**: _string_, optional, default='image'
- **alt**: _string_, optional, default=''

### Examples:

```md
<MediaViewer src="https://youtu.be/T98iy0mJk0s" alt="ComponentHealthCheckVideo" type="video" />
<MediaViewer src={require('./img/widget-types/ComponentHealthCheckCreation.png')} alt="ComponentHealthCheckCreation" />
```
