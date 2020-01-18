//每个文件都有自己的独立作用域
//模块作用域
var URL = require('./node.js')
var a = 1;
console.log(a)

//global 将一个内部变量挂载到global中
//影响全局变量
//地址引用的问题

console.log(URL)
console.log(module)

//导出多个变量的时候，使用

module.exports = {
    a,
    b,
    c,
}
//导出单个文件

exports.a = ''
exports.b = ''