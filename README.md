# process-st
An app that lets users upload to Wistia using Blueimp File Upload Plugin

Blueimp File Upload plugin used:
https://github.com/blueimp/jQuery-File-Upload

Wistia Upload API used:
http://wistia.com/doc/upload-api

### Demo link
https://process-st-mf.herokuapp.com

### To run the project locally:
```
> git clone https://github.com/mohammadfarooqi/process-st.git
> cd process-st
> npm install
> npm start
```

### To run tests - note: please have karma-cli installed globally
```
> cd process-st
> npm test
```
### Features
* Click Add file button to select a file.
* Click start upload button to upload file to Wistia account (3 uploads allowed).
* Shows upload progress in a progress bar.
* Once file completes uploading, it shows as an embedded Wistia video player.
* Uses Angular 1.
* Uses ES5.
* Component has unit tests.
