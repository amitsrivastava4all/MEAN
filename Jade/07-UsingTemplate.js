var jade = require('jade'), fs = require('fs');
var path = require("path");
var http = require("http");
var data = {
    pageTitle: "This is Sample Page",
    author: {
        firstname:"Amit",
        lastname:"Srivastava"
    },
    tags: [{'coursename':'Express',"price":5000}, {'coursename':'NodeJS',"price":5000}, {'coursename':'JavaScript',"price":5000}]
}
var path2= path.join(__dirname+"/demo.jade");
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var method = req.method;
    var url = req.url;
    if(url==='/jadeexample'){
        fs.readFile(path2, 'utf-8', function(error, source){
            var template = jade.compile(source);
            var html = template(data)
            res.end(html);
            //console.log(html)
    });
    }
    else{
        res.end("It is Something else not Jade Request");
    }
});
server.listen(9997,function(){
    console.log("Server Start...");
});
