exports.world=function(){
 console.info("Hellow world");
}

function goodBye(){
 console.info("ddd");
  var name;
  this.setName=function(thyName){
       name=thyName;
  };
  this.sayHello=function(){
       console.info('hello'+name);
  };
};
 exports.goodBye=goodBye;