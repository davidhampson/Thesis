//ref: https://github.com/coreybutler/node-windows
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Music Lesson',
  description: '',
  script: 'C:\\Users\\David Hampson\\Dropbox\\School\\THESIS\\Project\\MusicLesson\\server\\server.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();