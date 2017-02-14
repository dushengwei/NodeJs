var http = require('http');
var fs=require("fs");
var dat;
fs.readFile('H:/node/file/input.txt',function(err,data){
 if(err) return console.error(err);
  dat=data;
 console.log(data.toString());
});     

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end(dat);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');