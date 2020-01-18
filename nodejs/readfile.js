//浏览器中的js是没有文件操作的能力的
//但是node中的JavaScript是具有文件操作能力的
/*
    使用require方法加载fs核心模块
 */
var fs = require('fs');
 
//fs.readFile('fs) 读取文件

fs.readFile('./NODEjs/node.js',function(error,data){
    console.log(data);
})
