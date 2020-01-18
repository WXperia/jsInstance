//斐波那契数列
var sum1 = 0
var sum2 = 0
var sum = 1
var c = 0
for (i = 1; i<=12; i++) {
    sum1 = sum
    sum = sum1 + sum2
    sum2 = sum1
    c += sum;
    console.log(sum)
}
console.log('\n'+c)

