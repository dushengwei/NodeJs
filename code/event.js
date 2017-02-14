var events=require('events');

var eventEmitter=new events.EventEmitter();

var connectHandler=function(){
   console.log("连接成功11");
   eventEmitter.emit('data_receive');
   
  }

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_receive',function(){
  console.log("数据接收成功111".toString('base64'));
});
eventEmitter.emit('connection');

console.log("程序执行完毕111");