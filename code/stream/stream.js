var fs=require('fs');
var data;
var readStream=fs.createReadStream('file/input.txt');

//���ñ���Ϊutf-8
    readStream.setEncoding("utf8");

//�����¼��� data end error finsh
    readStream.on('data',function(chunk){
     data+=chunk;
   });

    readStream.on('end',function(){
       console.info(data);
    });
  
    readStream.on('error',function(){
      console.info('���ݶ�ȡʧ��');
   });

  console.info('�������');