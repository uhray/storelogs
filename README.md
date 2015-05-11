# Store Logs
=========

Storing logs from frontend in [Uhray Boilerplate](https://github.com/uhray/boilerplate).

# Installation

### Backend

 ```
 npm install --save storelogs
 ```

### Frontend

 ```
 bower install --save storelogs
 ```

 Then setup [RequireJS](http://requirejs.org/) to have [crud](https://github.com/uhray/crud) and to point storelogs at [dist/storelogs.js](dist/storelogs.js).

# Usage

### Backend

 ```js
 var crud = require('node-crud'),
     mongoose = require('mongoose');

 // pass in the crud and mongoose objects from your app
 require('storelogs')(crud, mongoose);
 ```

 Now it's setup.

### Frontend

 ```js
 define(['storelogs'], function(storelogs) {
   storelogs.debug('my message', { here: 'is', some: 'data' });
   storelogs.log('my message', { here: 'is', some: 'data' });
   storelogs.warn('my message', { here: 'is', some: 'data' });
   storelogs.error('my message', { here: 'is', some: 'data' });
 });
 ```

 The default URL it pings for storing logs is `/api/storelogs`, but if you need to change that you can call `storelogs._setPath('my/new/path')`.
