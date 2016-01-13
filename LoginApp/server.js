var http=require("http");
var fs = require("fs");
var path = require("path");
var qs = require("querystring");
var url1=require("url");
var userOperations = require("./loginoperation.js");
var server = http.createServer(function(request,response){
    var method = request.method;
    var url = request.url;


    if(isStaticResource(url)){

        var resourcePath = path.join(__dirname,url);
        console.log("Path is ",resourcePath);
            var stream = fs.createReadStream(resourcePath);
            stream.pipe(response);


    }

    else
    if(method==="POST" && url==="/login"){
        response.writeHead(200,{"Content-Type":"text/html"});
        // Fetch the Value from the Request body
        var postDataObject = null;
        var bodyData = '';
        //response.end("U Submit the Login Page");
        request.on("data",function(chunkData){
            bodyData = bodyData + chunkData;
        });
        request.on("end",function(){
            console.log("Body Data is ",bodyData);
            postDataObject = qs.parse(bodyData);
            var result = userOperations(postDataObject.userid,postDataObject.pwd,response);
            /*if(result){

            }
            else
            {
                response.end("Invalid Userid or Password");
            }*/
            //console.log("Body Data is ",bodyData);
            //console.log("Object is ",postDataObject);
        });

    }
    else
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end("Hey this is a New Request");
    }
});

server.listen(9292,function(){
    console.log("Server Start");
});
var staticResourceArray = [".html",".css",".png",".jpg",".js",".webm",".mp3"];
function isStaticResource(resourcename){
    return staticResourceArray.indexOf(path.extname(resourcename))!==-1;
}