const fs = require('fs')

const data = fs.readdirSync(__dirname)
data.forEach(async (item,index)=>{
    try{
        if(/\.js$|html$/g.test(item)){
            let file =  await fs.readFileSync(`${__dirname}/${item}`)
            console.log(file)
        }
    }catch(e){
        console.log(e)
    }
  
})
console.log(data)