const s = new Set()

const list = [1,1,2,2,3,4,4]

list.forEach((item,index)=>{
    s.add(item)
})
console.log(s)