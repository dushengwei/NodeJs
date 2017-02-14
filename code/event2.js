var events=require('events');
var eventEmitter=new events.EventEmitter();

var listener1=function(){
  console.info('listener1');
}


var listener2=function(){
  console.info('listener2');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

eventEmitter.emit('connection');

eventEmitter.emit('error');