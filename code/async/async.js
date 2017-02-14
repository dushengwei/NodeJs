var fs=require('fs');

 fs.readFile("H:/node/file/input.txt",function(err ,data){
       if(err){
      return console.error(err);
    }
    console.log("异步读取"+data.toString());
  });

var data=fs.readFileSync("H:/node/file/input.txt");
console.log(data.toString());


//异步打开文件
  console.info("准备打开文件");
 fs.open("H:/node/file/input.txt",'r+',function(err,fd){
     if(err){
       return console.error(err);
    }
     console.info(fd);
     console.log("文件打开成功222");
});
