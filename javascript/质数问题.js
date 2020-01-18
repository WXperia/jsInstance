function isPrimeNumber(num) {
    for(var i = 2; i<=(num/2); i++) {
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log(isPrimeNumber(4));

function isPrimeNumberArr(num) {
    var arr = [];
    for(var k = 2; k<=num; k++) {
        if(isPrimeNumber(k)) {
            arr.push(k)
        }
    }
    console.log(arr)
    return arr
}

console.time()

isPrimeNumberArr(233333);

console.timeEnd()