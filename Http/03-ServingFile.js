var http = require("http");
var fs = require("fs");
var path = require("path");
var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    var method = request.method;
    var url = request.url;
    console.log("Method "+method+" URL "+url);
    var newPath = path.join(__dirname,"/pages/"+url);
    if(isStaticResource(url)!=-1){
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
    }
    /*else
    if(method==="GET" && url==="/"){
        response.end("Hello Client ");
    }*/
    else
    if(method==="GET" && url==="/home"){
            var user = require("./logic");
            response.send(user.checkLogin());

        //response.end("This is Home Page Request");
    }
    else{
        response.end("Hey this is a New Request ");
    }
});
server.listen(9997,function(){
    console.log("Server Start and listen on Port 9997.....");
});
var staticResourceArray = [".html",".css",".png",".jpg",".js",".webm",".mp3"];
function isStaticResource(resourcename){
    return staticResourceArray.indexOf(path.extname(resourcename))!==-1;
}