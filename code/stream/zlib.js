var fs=require('fs');
var zlib=require('zlib');

//ѹ��input.txt�ļ�Ϊinput.txt.gz

//��ȡ�ļ����ڹܵ���ѹ��Ȼ�����
fs.createReadStream("H:/node/file/input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("H:/node/file/input.txt.gz"));

console.info("ѹ�����");