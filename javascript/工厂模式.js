//下面有三个类
//工厂模式用于解决多个方法过于相似，提取相似的部分，利用传入的参数，初始化不同的部分
function Class1 () {
    this.name = 'class1' //防止将此类当作方法使用的人
    return this
}
Class1.prototype.getName = function () {
    console.log(this.name)
    return this.name
}
function Class2 () {
    this.name = 'class2'
    return this
}
Class2.prototype.getName = function () {
    console.log(this.name)
    return this.name
}
function Class3 () {
    this.name = 'class3'
    return this
}
Class3.prototype.getName = function () {
    console.log(this.name)
    return this.name
}

//分别实例化。

var c1 = new Class1()
var c2 = new Class2()
var c3 = new Class3()

//初级的工厂模式 工厂函数

var ClassFactory = function (name) {
    switch(name) {
        case 'Class1':
            return new Class1() 
        case 'Class2':
            return new Class2()
        case 'Class3':
            return new Class3()
    }
}

//或者 

var ClassMaster = function (name) {
    var o = new Object()
    o.name = name
    //z这里也可以用if
    switch(name) {
        case 'Class1': //如果真这么简单还是不要玩这些奇怪的东西吧
            o.getName = function() {
                console.log('class1')
            } ;break;
        case 'Class2':
             o.getName = function() {
                console.log('class2')
             } ;break;
        case 'Class3':
            o.getName = function() {
                console.log('class3')
            } ;break;
    }
    return o
}
var cf1 = new ClassFactory('Class1')
cf1.getName() //输出  class1

var cm1 = new ClassMaster('Class2')
cm1.getName() //输出  class2