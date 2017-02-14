var fs=require("fs");

//创建一个可读流
  var readerStream=fs.createReadStream("H:/node/file/input.txt");


//创建一个可写流
 var writeStream=fs.createWriteStream("H:/node/file/output.txt");

//管道读写操作

   readerStream.pipe(writeStream);

  console.info("程序执行完毕");