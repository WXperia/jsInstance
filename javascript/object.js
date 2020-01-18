//project

//面向对象过程，根据需求寻找对象，所有的事情都由对象做

//f
Function.prototype.addFunction = function (name,fun) {
    this[name] = fun
    return this
}
    
var aa = new Function()

aa.addFunction('aa',function(){
    console.log('sasasasa')
})

aa.aa()


