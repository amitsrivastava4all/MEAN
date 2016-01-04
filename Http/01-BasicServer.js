
var http = require("http");
http.createServer(serveRequest).listen(1234,function(){
    console.log("Server Start...");
});

function serveRequest(request,response){
    console.log("New Request is Coming... "+request.url);
    response.writeHead(200,"{'content-type':'text/html'}");
    response.write("<b>Hello </b>");
    response.end("<h1>Hello User</h1>");
}

