var http=require("http");
var fs = require("fs");
var path = require("path");
var qs = require("querystring");
var url1=require("url");
var userOperations = require("./LoginOperations.js");
var server = http.createServer(function(request,response){
    var method = request.method;
    var url = request.url;
    var curl= url1.parse(request.url,true);
    /*console.log("Url is ",url );
    console.log("Method is ",method);
    console.log("Curl is :: ",curl);
    console.log("path ",curl.pathname);*/
    if(isStaticResource(curl.pathname)){

        var resourcePath = path.join(__dirname,curl.pathname);
        console.log("Path is ",resourcePath);


           if(fs.statSync(resourcePath)){
               var stream = fs.createReadStream(resourcePath);
               stream.pipe(response);
           }

    }
    else
    if(method==="GET" && url==="/"){
        var joinPath = path.join(__dirname,"/pages/login.html")
        var login = fs.readFileSync(joinPath);
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end(login);
    }
    else
    if(method==="POST" && url==="/CheckLogin"){
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
            var result = userOperations.loginCheck(postDataObject.userid,postDataObject.pwd);
            if(result){

                response.end(fs.readFileSync(path.join(__dirname,"/pages/welcome.html")));
            }
            else
            {
                response.end(fs.readFileSync(path.join(__dirname,"/pages/invalid.html")));
            }
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