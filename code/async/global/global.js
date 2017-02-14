console.info(__filename);//当前文件的绝对路径
console.info(__dirname);//当前执行脚本所在目录

function a(){
console.trace("哈哈");
 }
a();

process.on('exit',function(code){
 //以下代码永远不会执行
  setTimeout(function(){
      console.log("该代码不会执行");
  },0);
   console.log("退出码为:",code);
});

 console.log("程序执行结束");

//输出到终端
  process.stdout.write("Hello World!");

