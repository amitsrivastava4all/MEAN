var http = require("http");
var fs = require("fs");
var path = require("path");
var urlObj=require("url"); // url to object conversion
var login = require("./login");
var server = http.createServer(handleRequest);
server.listen(9998,function(){
    console.log("Server Start");
});
function handleRequest(request,response){
    var url = request.url;
    var method=request.method;
    response.writeHead(200,'text/html');
    console.log("URL is "+url);
    if(isStaticFile(url)>=0) {
        var newPath = path.join(__dirname, url);
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
    }
    else
    //login?userid=amit&pwd=amit (querystring)
    if(url.indexOf('/login')>=0 && method==='GET'){
        //console.log("URL OBJECT ",urlObj.parse(url,true).query.userid);
        // urlObj.parse(url,true) this will parse the querystring
        var userid = urlObj.parse(url,true).query.userid;
        var pwd = urlObj.parse(url,true).query.pwd;
        console.log("Userid "+userid+" Password "+pwd);
        var resultObject = login(userid,pwd);
        response.end("<h1>"+resultObject.msg+" "+resultObject.user+"</h1>");
    }

    //response.end("<b>Hello Client</b>");
   /*
    //if(url==='/index.html'){


    }*/
    }


function isStaticFile(resourceName){
    var extensions=[".html",".jpg",".webm"];
    var ext = path.extname(resourceName);
    return extensions.indexOf(ext);
    //console.log("Extension "+ext);

}
