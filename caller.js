var calcObject = require("./calc");
var fs = require("fs");
var path = require("path");
var newPath = path.join(__dirname,"/data.csv");
var stream = fs.createReadStream(newPath, {encoding: 'utf8',highWaterMark: 10});
var fileContents='';
//console.log("New Path ",newPath);
/*fs.readFile(newPath,"utf-8",function(error,content){
   if(error){
       console.log("Error Reading File");
       return ;
   }*/
    //console.log("C",content);

   /* content.split("\n").forEach(function(value){
       var data = value.split(",");
        var result = calcObject[data[0]](data[1],data[2]);
        console.log("Result ",result);
    });*/

    stream.on("data", function(chunk){
       // console.log("Chunk ",chunk);

        fileContents += chunk;
        //console.log("fileContent ",fileContents);
        var newLine = fileContents.indexOf('\n');
        while(newLine !== -1){
            var line = fileContents.substr(0, newLine);
            var fields = line.split(',');
            var operation = fields[0];

            var result = calcObject[operation](fields[1], fields[2]);
            console.log(result);
            fileContents = fileContents.substr(newLine + 1);
            newLine = fileContents.indexOf('\n');
        }
   // });
});