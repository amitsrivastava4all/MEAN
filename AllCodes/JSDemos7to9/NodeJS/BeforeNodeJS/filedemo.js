var fs = require("fs");
console.log("Start....");
fs.readFile("Test.txt",onceCompleted);
//var result = fs.readFileSync("Test.txt");

console.log("Result "+result);
function onceCompleted(error,content){
if(content){
    console.log("Content is "+content);
}
    else{
    console.log("Error");
}
}
console.log("End....");

