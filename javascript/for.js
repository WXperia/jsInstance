console.log('this is for ')
var sum = 0,sum2 = 0,sum3 = 0,sum7 = 0
for (var i = 0; i<= 100; i++) {
  
    if (i % 3 == 0) {
        sum += i
       
    } //检查是否被3整除
    if(i % 2 == 0) {
        sum2 += i
    }else {
        sum3 += i
    }//偶数
    if(i % 7 ==0) {
        sum7 += i
    }
    
}
console.log(`三整除的和${sum}`)
console.log(`奇数和${sum3}偶数和${sum2}`)
console.log(`被7整除的和${sum7}`)
//先执行表达式1 ,然后执行表达式2，如果成立，执行循环体，再执行表达式3，再检查条件是否成立


/// 求 1  - 100 之间的奇数的和，偶数的和，

