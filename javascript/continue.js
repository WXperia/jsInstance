//break continue 的使用

//数组

//冒泡排序
// function getRandom() {
//     return Math.random()*100
// }
// var arr = new Array();
// var i = 1;
// for(i; i<=100; i++) {
//     arr.push(getRandom())
// }

// var str = ''
// for(i = 0; i<=arr.length-1; i++) {
//     str += arr[i]
// }
var arr = [1,2,3314,432,654,76,86]

function getNumber(arr,type) {
    var max = arr[0]
    if(type == 'Max') {
        for(i = 0; i<=arr.length; i++){
            if(max<=arr[i]) {
                max = arr[i]
            }
        }
    }else if(type == 'Min') {
        for(i = 0; i<=arr.length; i++){
            if(max>=arr[i]) {
                max = arr[i]
            }
        }
    }
   
    
    console.log(max)
}
function swap(arr) {
    var swapArr = [];
    console.log(arr)
    for(var i = arr.length-1; i>=0; i--) {
        swapArr.push(arr[i])
    }
    console.log(swapArr)
    return swapArr
}

getNumber(arr,'Max');
getNumber(arr,'Min');
swap(arr);
function popo(arr) {
    var t= '';
    for(var i = 0; i<arr.length-1; i++){
        for(var j =i+1; j<arr.length-1; j++){
            if(arr[i]>arr[j]){
                t = arr[j]
                arr[j] = arr[i]
                arr[i] = t
            }
        }
    }
    console.log(arr)
}
Timer(popo(arr))