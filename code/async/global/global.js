console.info(__filename);//��ǰ�ļ��ľ���·��
console.info(__dirname);//��ǰִ�нű�����Ŀ¼

function a(){
console.trace("����");
 }
a();

process.on('exit',function(code){
 //���´�����Զ����ִ��
  setTimeout(function(){
      console.log("�ô��벻��ִ��");
  },0);
   console.log("�˳���Ϊ:",code);
});

 console.log("����ִ�н���");

//������ն�
  process.stdout.write("Hello World!");

