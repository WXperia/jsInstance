var arr1 = [1,2,3,4,5]

arr1.forEach(function(v,k){
    console.log(`key:${k}  value:${v}`)
},arr1)//arr1 改变方法内部的作用域 this的指向

/* 
    every
*/

let rs = arr1.every(v=>{
    return v>5;
})

/* 
    some
*/
let rs1 = arr1.some(v=>{
    return v>5;
})
console.log(rs)
console.log(rs1)
/* 
    filter
*/

let rs2 = arr1.filter(v=>{
    return v>3
})
console.log(rs2)
/* 
    map
*/

let rs3 = arr1.map(v=>{
    return v*3
})
console.log(rs3)

/* 
    reduce
*/

let rs4 = arr1.reduce(function(prev,current){
    return prev + current
},0)

console.log(rs4)