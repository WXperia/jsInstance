/* 
    events 模块
*/
var EventEmmiter = require('events')
//继承EventEmmiter
class Person extends EventEmmiter {
    constructor(name='xzq',age='0',...self){
        super()
        this.name = name;
        this.age = age;
        this.self = [...self];
        
    }
    growup(){
        setInterval(() => {
            this.age ++
            this.emit('growup')
        }, 1000);
    }
}

var p1 = new Person()
p1.addListener('growup',function(){
    console.log(`${this.name}现在${this.age}岁`)
})
p1.growup()