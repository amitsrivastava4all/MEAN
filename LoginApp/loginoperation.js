var mongoose = require("mongoose");
var jade = require("jade");
var fs = require("fs");
var path=require("path");

function loginCheck(userid,pwd,res){
    //var isFound = false;
    var db = mongoose.connect("mongodb://localhost:27017/amitdb");
    var userSchema= new mongoose.Schema({
        "uid":String,"pwd":String/*,"id":{"type":String,"unique":true}
    */});
    var User = mongoose.model("test3",userSchema);
    console.log("Userid "+userid+" Password "+pwd+" UserObject "+User);
    User.find({"uid":userid,"pwd":pwd},function(error,docs){
        if(error){
            console.log("Error.... ",error);
        }
        if(docs && docs.length>0) {
            console.log("DOCS ",docs);
            console.log(typeof docs);
            var path2 = path.join(__dirname, '/sample.jade');
            fs.readFile(path2, 'utf-8', function (error, source) {
                var template = jade.compile(source);
                data = {"username": docs[0].uid};
                console.log("UID ",data.username);
                var html = template(data)
                res.end(html);
                console.log(html);
                //isFound = true;

            });
        }
        else{
            res.end("Invalid Userid or Password");
        }


    });
    //return isFound;
}
module.exports=loginCheck;