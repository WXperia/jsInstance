var i = 0;
var sum = 0;
do {
    if(i%3 == 0) {
        sum += i
    }
    i++
} while ( i <= 100)

console.log(sum)
//先循环再判断，最少会执行一次循环体