var fs = require("fs");
var path = require("path");
console.log("Current Dir Path ",__dirname);
console.log("Current File path ",__filename);

var newPath = path.normalize(__dirname+"/..");
console.log("New Path is ",newPath);

var joinPath = path.join(newPath,'/Files/Sample.txt');
console.log("Join Path ",joinPath);

fs.readFile(joinPath,function(error,content){
if(error){
console.log("Unable to Read a File ",error);
}
else
{
console.log("Content is "+content);
}
}); 

console.log("Get the Directory path ",path.dirname(joinPath));
console.log("Get the File Only ",path.basename(joinPath));
console.log("Get the File Only with out extension ",path.basename(joinPath,'.txt'));

console.log("OS Specific Sep ",path.sep);
console.log("Del ",path.delimiter);

var object = path.parse(joinPath);  // Convert Path into Object
console.log("Object is ",object);
var path2 = path.format(object);  // Convert Object into Path
console.log("Path is ",path2);
/*
a=1000;
b=2000;
console.log("Sum is ******** ",(a+b));*/
