var http=require("http");
var url=require("url");
var fs=require("fs");


var types = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};

function onRequest(req,resp){  

//解析url
var path=url.parse(req.url).pathname;
//获取文件的绝对路径
var filepath=__dirname+path;
 
var temp="";     
var temparr=filepath.split("/");
    for(var key in temparr){
      temp=temp+temparr[key]+"\\";
   }
 
   temp=temp.slice(0,-1);
 filepath=temp;
 console.info(filepath);


//获取文件的扩展名
var index=path.lastIndexOf(".");
var type=path.slice(index+1);
//console.info(type);
//console.info(types[type+'']);
var content_type=types[type+''];
//console.info(filepath);

//读取文件

console.info();
//var readStream=fs.createReadStream(filepath);
var readStream=fs.createReadStream("H:/node/ProgrammerOne/file/image/1.png");
readStream.setEncoding("utf8");
resp.writeHead(200);


var chunks = [];  
var size = 0;  
readStream.on('data',function(chunk){
//应答数据content_type
 chunks.push(chunk);  
 size += chunk.length;  


});
readStream.on('end',function(){
  var buffer=  Buffer.alloc(size);
     buffer.write(chunks);
   resp.writeHead(200);
  resp.write(buffer);
    resp.end();

});
readStream.on('error',function(err){
 console.info(err.stack);
});


}

 http.createServer(onRequest).listen(8888);
