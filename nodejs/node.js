
console.log(global);
/* 

    在node中没有BOM DOM，和浏览器中的js是不一样的
*/
var a = 10;

function Sum(a,b){
    a = a || 12;
    b = b || 13;
    console.log(a+b) //25
}
Sum()
// const URL = '66666'

// exports.URL = URL
