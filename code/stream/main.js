var fs=require('fs');
var data="����̳̹�����ַ:www.runoob.com";

//����һ���ļ�д����,д�����ݵ�output.txt
var writeStream=fs.createWriteStream("H:/node/file/output.txt");
    writeStream.write(data,'UTF-8');

//����ļ���β
    writeStream.end();


   writeStream.on('finish',function(){
       console.info('д�����');
  });

  writeStream.on('error',function(){
        console.info(err.stack);
  });

  console.info("����ִ�����");
       