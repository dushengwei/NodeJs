var fs=require('fs');
var zlib=require('zlib');

//压缩input.txt文件为input.txt.gz

//读取文件后在管道中压缩然后输出
fs.createReadStream("H:/node/file/input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("H:/node/file/input.txt.gz"));

console.info("压缩完成");