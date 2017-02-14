var fs=require('fs');
var data;
var readStream=fs.createReadStream('file/input.txt');

//设置编码为utf-8
    readStream.setEncoding("utf8");

//处理事件流 data end error finsh
    readStream.on('data',function(chunk){
     data+=chunk;
   });

    readStream.on('end',function(){
       console.info(data);
    });
  
    readStream.on('error',function(){
      console.info('数据读取失败');
   });

  console.info('操作完成');