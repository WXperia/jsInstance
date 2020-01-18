function getSum(x) {
    if(x==1){
        return 1
    }else{
        return x + getSum(x-1);
    }
}
getSum(100)
console.log(getSum(100))
/**
 * 计算一个数字各个位的和 
 */
function getEvery(num){
    if(num < 10){
        return num
    }else {
        return num%10 + getEvery(parseInt(num/10))
    }
}
console.log(getEvery(100))

/**
 * 递归斐波那契数列
 * 
 */
function getFib(x){
    if(x==1 || x==2){
        return 1
    }else {
        return getFib(x-1)+getFib(x-2)
    }
}
console.log(getFib(12))