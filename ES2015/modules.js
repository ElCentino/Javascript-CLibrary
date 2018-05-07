
var SecondFile = require('./second.js');
var SecondFileFunctions = require('./second.js');

var project = new SecondFile.Project();

console.log(SecondFileFunctions.sayHello("Hello World"));

console.log(project.projectId);
