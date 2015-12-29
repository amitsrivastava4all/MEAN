var calcObject = require("./calc");
var fs = require("fs");
var path = require("path");
var newPath = path.join(__dirname,"/data.csv");
//console.log("New Path ",newPath);
fs.readFile(newPath,"utf-8",function(error,content){
   if(error){
       console.log("Error Reading File");
       return ;
   }
    //console.log("C",content);

    content.split("\n").forEach(function(value){
       var data = value.split(",");
        var result = calcObject[data[0]](data[1],data[2]);
        console.log("Result ",result);
    });
});