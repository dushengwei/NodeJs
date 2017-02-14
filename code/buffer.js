//存储一个数值
var buf=new Buffer(34);
//存储一个字符串
var buf1=new Buffer('www.com.阚仁乐',"utf-8");
console.info(buf1);
//存储一个数组
var buf2=new Buffer([3,4,23,43],"utf-8");
console.info(buf2);

//写入buffer
var buf3=new Buffer(10);
var len= buf3.write("www.runoob.com",0,12,"utf-8");
console.info("写入的字节长度"+len);
console.info(buf3);


//读取缓冲区的数据


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

//将buffer 转为json对象

   var buf6=new Buffer("www.runbo.com");
  var json=buf6.toJSON(buf6);
 console.info("aaa"+json);

//缓冲区合并
 var buf7=new Buffer('菜鸟教程');
var buf8=new Buffer("www.runoob.com");
 var buf9=Buffer.concat([buf7,buf8]);
 console.info("buf9内容:"+buf9);

//缓冲区比较

//缓冲区裁剪

console.info(buf9.length);