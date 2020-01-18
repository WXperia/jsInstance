function Person() {
    this.a = function(){}
    this.type = 'student'
}
Person.prototype.age = 10;
Person.prototype.name = '小明';
function copy(sub, superClass) {
    superClass.call(sub)
    for(var key in superClass.prototype){
        sub[key] = superClass.prototype[key]
    }
}

var o = {}
copy(o, Person)

console.log(o)
//原型的作用就是为了节省内存，
//继承： 目的式为了节省内存空间
//组合继承 原型+ 借用