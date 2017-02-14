var fs=require('fs');
var data="菜鸟教程官网地址:www.runoob.com";

//创建一个文件写出流,写出数据到output.txt
var writeStream=fs.createWriteStream("H:/node/file/output.txt");
    writeStream.write(data,'UTF-8');

//标记文件结尾
    writeStream.end();


   writeStream.on('finish',function(){
       console.info('写入完成');
  });

  writeStream.on('error',function(){
        console.info(err.stack);
  });

  console.info("程序执行完毕");
       