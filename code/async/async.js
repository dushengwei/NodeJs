var fs=require('fs');

 fs.readFile("H:/node/file/input.txt",function(err ,data){
       if(err){
      return console.error(err);
    }
    console.log("�첽��ȡ"+data.toString());
  });

var data=fs.readFileSync("H:/node/file/input.txt");
console.log(data.toString());


//�첽���ļ�
  console.info("׼�����ļ�");
 fs.open("H:/node/file/input.txt",'r+',function(err,fd){
     if(err){
       return console.error(err);
    }
     console.info(fd);
     console.log("�ļ��򿪳ɹ�222");
});
