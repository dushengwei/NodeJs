var fs=require("fs");

//����һ���ɶ���
  var readerStream=fs.createReadStream("H:/node/file/input.txt");


//����һ����д��
 var writeStream=fs.createWriteStream("H:/node/file/output.txt");

//�ܵ���д����

   readerStream.pipe(writeStream);

  console.info("����ִ�����");