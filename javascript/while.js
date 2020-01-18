
//练习
//while 先判断在循环，有可能一次循环体都不执行
var i = 1
var s = 100
var sum = 0

while(i <= s) {
    if(i % 3 == 0) {
        sum += i
    }
    i ++ 
}

console.log(sum)
