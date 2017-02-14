var http=require("http");
var url=require("url");

http.createServer(function(req,resp){//http://localhost:8081/Taobao?name=333&password=3434
console.info(req.url);///Taobao?name=333&password=3434
console.info(url.parse(req.url));//包含大量信息的对象
console.info(url.parse(req.url).pathname);///Taobao
console.info(url.parse(req.url).query);//name=333&password=3434
}).listen(8081);