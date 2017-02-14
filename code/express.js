//express_demo.js文件
var express=require('express');
//创建了一个应用实例
var app=express();

app.get('/',function(req,resp){
 res.send('Hello World');
});

var server=app.listen(8081,function(){
  var host=server.address().address
  var port=server.address().port

  console.info("应用实例,访问地址为http://%s:%s",host,port);

});
