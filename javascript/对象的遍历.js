json = {
    name: '222',
    haha: '2312',
    keke: '231'
}

for(var key in json){
    console.log(json[key])
}


console.log(json.name )

var arr = [1,2,3,4,5,6,77]



function myMax (arr) {
    var max = arr[0],len = arr.length,i = 0
    for(i; i<=len-1; i++){
        if(max<arr[i]) {
            max = arr[i]
        }
    }
    console.log(max)
    return max
}
function Timer (fn) {
    console.time()
    fn
    console.timeEnd()
}

Timer(myMax(arr))

