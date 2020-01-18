/**
 * 寄生继承
 */
//创建一个过度类
//解除寄生组合继承时，父类与子类的耦合，将父类的prototype寄生到 new Fn()上，再返回
function inheritObject(o) {
    function Fn() {}
    Fn.prototype = o
    return new Fn()
}
//基对象
var book = {
    name:'javascript',
    alikebook:['css book','html book']
}
//新建立一个方法，对inheritObject 进行二次封装 
function createbook (obj) {
    var o = new inheritObject(obj)

    o.getName = function () {
        console.log(name)
        return name
    }
    return o
}

/**
 * 终极继承方式---寄生组合继承
 * 产生原因： 之前使用类继承和构造继承组合成的组合继承，有 子类不是父类的实例，但是子类的原型确是父类的实例
 */

 function inheritPrototype (subClass, superClass) {
    var p = inheritObject(superClass.prototype)
    // 这里通过一个过渡对象的封装，将superClass.prototype复制一份保存下来
    // 复制好后，p中就有superClass原型上所有的方法，但是他的 constructor 还是指向 superClass
    //所以需要将p的constructor重新指向 subClass 这样，p 就将父类元素原型上的方法全部复制到了 子类上
    //并且没有执行父类superClass的constructor上的构造方法。
    console.log(p.constructor)//因为 返回的是一个 new Fn() 对象，所以 p 相当于是 superClass.prototype 的一个实例 ，
    console.log(superClass.prototype)
    p.constructor = subClass
    console.log(p.constructor)
    // 此时p.constructor 指向的是supperClass所以需要修正
    subClass.prototype = p
 }
 /**
  * 父类
  */
 function superClass (name) {
    this.name = name
    this.books = ['111','222','333']
}
superClass.prototype.getName = function () {
       console.log(this.name)
       return this.name
}
/**
 * 子类
 */
 function subClass (name,type) {
     superClass.call(this,name)
     this.type= type
     this.books = ['aaa','bbb','ccc']
 }


/**
 * 寄生式继承父类原型
 */
inheritPrototype(subClass, superClass)
/**
 * 这一步必须放在 进行寄生式继承的后面，如果在此之前加，
 * inheritPrototype(subClass, superClass)会将subClass.prototype覆盖掉
 * 使得subClass.prototype上的 getType方法失效
 * 输出此错误
 * instance1.getType()
          ^

TypeError: instance1.getType is not a function
 */
subClass.prototype.getType = function () {
    console.log(this.type)
    return this.type
}   
var instance1 = new subClass('666','233')
var instance2 = new superClass('javascript')

// instance1.getType()
instance2.getName()
instance1.getName()
console.log(subClass instanceof superClass)