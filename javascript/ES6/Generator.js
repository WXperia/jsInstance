//解决异步编程方法2

function* sayHi(){
    console.log(1)
    console.log(yield getData()) 
     console.log(3)
}

function getData(){
    setTimeout(function(){
       
        let b = 2
        a.next(b)
    })
}
 let a = sayHi()
a.next()