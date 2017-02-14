var http = require('http');
var fs=require("fs");
var dat;
fs.readFile('H:/node/file/input.txt',function(err,data){
 if(err) return console.error(err);
  dat=data;
 console.log(data.toString());
});     

http.createServer(function (request, response) {

	// ���� HTTP ͷ�� 
	// HTTP ״ֵ̬: 200 : OK
	// ��������: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// ������Ӧ���� "Hello World"
	response.end(dat);
}).listen(8888);

// �ն˴�ӡ������Ϣ
console.log('Server running at http://127.0.0.1:8888/');