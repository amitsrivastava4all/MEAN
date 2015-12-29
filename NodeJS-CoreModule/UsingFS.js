
//******************Using FS Module **************************************
var fs = require("fs");
var path = require("path");
/*console.log(__filename);
fs.stat(__filename,function(err,stat){
    console.log("Stat ",stat);
    console.log("IsFile ",stat.isFile());
    console.log("IsDir ",stat.isDirectory());
    console.log("IsBlock Device ",stat.isBlockDevice());

});*/


// Scanning a Folder
/*var newPath = path.normalize(__dirname+"/..");
console.log("New Path ",newPath);
fs.readdir(newPath,function(err,folders){
   console.log(folders);
});*/
/*fs.open("abcd.txt","r",function(error,fd){
    if(fd){
    fd.readFile("abcd.txt",function(error,content){

    });
    }
    fs.close(fd,function(error){

    });
});
*/

var x = fs.readFileSync(__filename);
console.log(x);
console.log("This Line Will Execute After Read *****************************************");
x = fs.readFile(__filename,function(error,content){
    if(error){

    }
    else
    {
        console.log("After Asynch Read "+content);
    }
});
console.log("this will execute Before Read.....");

//Writing in a File
/*var data ='this is a sample data to write in a file...';
fs.writeFile('Test.txt',data,function(error){
if(error){
    console.log("Error During Writing in a File ",error);
}
else{
    console.log("Data Written SuccessFully...");
}

});*/
/*
//Delete a File
fs.unlink('Test.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

// Creating Directory
fs.mkdir('/tmp/test',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});

// Reading Directory
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

fs.rmdir("/tmp/test",function(err) {
    if (err) {
        return console.error(err);
    }
    else{
        console.log("Remove Directory Done...");
    }
});

// Open a File and then read/write in a File
*/
