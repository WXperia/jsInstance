//ReadStream

const fs = require('fs');
let name = 'xzq';
let url = `${__dirname}/${name}.txt`;
console.log(__dirname,__filename);
//write
//first Error node中的约定，一个回调可能有错误发生，约定回调的一个参数专门用来提供错误对象

fs.writeFile(__dirname+'/'+name+'.txt','cyXzq',(err)=>{
    if(err) throw err;
    console.log('文件保存');
}); 
//字符串，音频，视频，流，二进制
//读取文件内容
fs.appendFileSync(url,'dfafsdfsagaf');
let a = fs.readFileSync(url);
//移除文件
let b = fs.statSync(url);
console.log(b);
//删除文件
fs.unlinkSync(url);
console.log(a);
/* 
    文件夹的写入和读取
*/
// // 新增
// fs.mkdirSync(url);
// // 删除
// fs.rmdirSync(url);
// 

fs.watchFile(__dirname+'/watchFile.html',(e)=>{
    console.log('文件变化');
    console.log(e)
})
//监听文件夹的变化
fs.watch(__dirname+'/watchdir',(eventType,filename)=>{
    console.log(eventType,filename)
})