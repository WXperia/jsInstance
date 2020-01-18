

console.log(`全局属性__dirname：${__dirname}`) 
console.log(`全局属性__filename：${__filename}`)
console.log(`nodejs的单线程`)
 async function getData(d){
    return new Promise(res=>{
        setTimeout(function(){
             getData(++ d)
            console.log(d)
        },1000)
    })
}
getData(0)