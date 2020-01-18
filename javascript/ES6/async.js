//异步编程解决方法

// async await

async function  fun1(){
    console.log(1);
   let b =  await getData();
   console.log(b)
   let b1 =  await getData();
   console.log(b1)
   let b2 =  await getData();
   console.log(b2)
    console.log(3)
}
function getData(){
  return new Promise(res=>{
    setTimeout(function(){
        let data = '321312'
        res(data)
        console.log(2)
    },1000)
  }) 
}

fun1()