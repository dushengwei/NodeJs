//express_demo.js�ļ�
var express=require('express');
//������һ��Ӧ��ʵ��
var app=express();

app.get('/',function(req,resp){
 res.send('Hello World');
});

var server=app.listen(8081,function(){
  var host=server.address().address
  var port=server.address().port

  console.info("Ӧ��ʵ��,���ʵ�ַΪhttp://%s:%s",host,port);

});
