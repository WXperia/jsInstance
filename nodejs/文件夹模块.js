//文件夹模块
//模块嵌套模块
/* 
    文件夹模块的导入
    1、读取文件夹中package.json文件
    2、导入package.json中的main指定文件
    3、如果不存在package.json或main指定的文件直接使用文件夹中的index.js
*/

/* 
    如果模块在node_module中，则只需要使用该模块的名字。30
*/
let data = require('./module1')

console.log(data)