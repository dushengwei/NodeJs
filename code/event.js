var events=require('events');

var eventEmitter=new events.EventEmitter();

var connectHandler=function(){
   console.log("���ӳɹ�11");
   eventEmitter.emit('data_receive');
   
  }

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_receive',function(){
  console.log("���ݽ��ճɹ�111".toString('base64'));
});
eventEmitter.emit('connection');

console.log("����ִ�����111");