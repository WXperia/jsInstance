var star = '★'
function star(str) {
    console.log(str)
}
//九九乘法口诀表
for(var i = 1;i<=9; i++) {
    for (var j = 1; j<=i; j++){
        console.log(`${i}*${j}=${i*j}`)
        if(i === j ) {
            console.log('\n')
        }
    }
}