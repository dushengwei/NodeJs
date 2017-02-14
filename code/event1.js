var events=require('events');
var emitter=new events.EventEmitter();
function f1(){
 console.info('qqqq');
 }

function f2(){
 console.info('xxxx');
 }

 emitter.on('someEvent',f1);
 emitter.on('someEvent',f2);
  
 emitter.emit('someEvent');



