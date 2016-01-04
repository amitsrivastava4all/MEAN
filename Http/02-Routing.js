var http = require("http");
var fs = require("fs");
var path = require("path");
var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    var method = request.method;
    var url = request.url;
    console.log("Method "+method+" URL "+url);
    if(method==="GET" && url==="/"){
        response.end("Hello Client ");
    }
    else
    if(method==="GET" && url==="/home"){
        var newPath = path.join(__dirname,"/pages/index.html");
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
        //response.end("This is Home Page Request");
    }
    else{
        response.end("Hey this is a New Request ");
    }
});
server.listen(9997,function(){
    console.log("Server Start and listen on Port 9997.....");
});