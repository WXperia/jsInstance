// console.log(process)

//argv: 用来获取当前运行node程序的相关参数。

/* console.log(process.argv)
//控制某个文件运行时没打印的内容，接收的命令
if(process.argv.includes('-v')){
    console.log('66666666')
} */

//屏蔽系统错误信息
const fs = require('fs')
console.log(process.env)
process.env.mode = 'dev'
if(process.env.mode || process.env.mode =='dev'){
    console.log('现在是开发模式，会打印错误和警告信息');
}else {
    console.log('生产模式')
}
var i = 0
// setInterval(
//     ()=>{
//         console.log(i++);
//         if(i>=10) process.exit()
//     },1000
// )
//标准输入输出流
process.stdout.write('请输入要创建的项目名称\n');
//e就是用户输入得内容，可根据用户输入进行程序上得反馈
process.stdin.on('data',e=>{
    console.log(e.toString().replace('\r\n',''))
    fs.mkdirSync(e.toString().replace('\r\n',''))
    process.stdout.write('项目创建成功')
})

