/* 
    模板字符串
*/
var c = 1,b=2;
/* 
    能够保存字符的格式
*/
var a = `${c=b},       
${b}`
console.log(a)
/* 
    对象的简写
*/
var func1 = function(){
    
}

var obj1 = {
    func1,
    a,
    b,
    a(){

    },
}

/* 
    对象的属性名表达式
*/

var obj1 = {
    x: 1,
    /*  属性名动态获取*/
    [b]:'12'
}

console.log(obj1['2'])

/* 
    迭代器

    for .. in 
    for .. of

*/

let ForObj = [1,2,3,4]
let obj2 = {left:1,top:2,bottom:3}
for(var key in ForObj){
    console.log(`for...in 打印key值：${key}`)
}
for(var value of ForObj){
    console.log(`for...of打印value值：${value}`)
}
//手写迭代协议
console.log(obj2)

