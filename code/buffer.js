//�洢һ����ֵ
var buf=new Buffer(34);
//�洢һ���ַ���
var buf1=new Buffer('www.com.������',"utf-8");
console.info(buf1);
//�洢һ������
var buf2=new Buffer([3,4,23,43],"utf-8");
console.info(buf2);

//д��buffer
var buf3=new Buffer(10);
var len= buf3.write("www.runoob.com",0,12,"utf-8");
console.info("д����ֽڳ���"+len);
console.info(buf3);


//��ȡ������������


buf4 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf4[i] = i + 97;
}

console.log( buf4.toString('ascii'));  
 

buf5=new Buffer(26);
for(var i=0;i<26;i++){
   buf5.write(i+97+"","utf-8");
}
console.info(buf5.toString('utf-8'));

//��buffer תΪjson����

   var buf6=new Buffer("www.runbo.com");
  var json=buf6.toJSON(buf6);
 console.info("aaa"+json);

//�������ϲ�
 var buf7=new Buffer('����̳�');
var buf8=new Buffer("www.runoob.com");
 var buf9=Buffer.concat([buf7,buf8]);
 console.info("buf9����:"+buf9);

//�������Ƚ�

//�������ü�

console.info(buf9.length);