/**
 * Created by arnav on 12/29/2012.
 */

var http = require("http");
var fs = require("fs");
var pathobj=require("path");
var path = "";
var server = http.createServer(function(request,response){
    console.log("Recieved Request for "+request.url);
    path = pathobj.join(__dirname,'/pages');
    path = path +'/'+ request.url;
    console.log("path is "+path);

    fs.readFile(path,function(error,data){
        //console.log(error +" "+data);
        if(error){
            response.writeHead(404,"{'content-type':'text/html'}");
            response.end("<html><body>OOPS Wrong URL</body></html>");
        }
        else
        {
            response.writeHead(200,"{'content-type':'text/html'}");
            response.end(data);
        }
    });

});
server.listen(1234);
console.log("Server Start");