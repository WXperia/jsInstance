'use strict'
/**
 * ES6 对es5的扩展
 * 在严格模式下 {name: '男' ，sex:"1123"}会报类型错误
 * /[Object.create()]/
 * 1、 value : 指定值
 * 2、 writable: 标识是否可以被删除 默认false
 * 3、configurable: 标识当前属性是否可以被删除 默认false
 * 4、enumerable: 标识当前属性是否能用for in 枚举 默认false
 */

 var obj1 = {username:'dobe', age:30}

 var obj = {};
    obj = Object.create(obj1, {
        sex: {
            value: '男',
            writable: true,
            configurable: true,
            enumerable: true
        }
    })

 console.log(obj.sex) ;
 delete obj.sex ;
 console.log(obj.sex) ;

/**
 * Object.defineProperties(object, descriptors)
 * 用于模仿私有变量的get set方法，解决es5使用闭包造成的内存泄漏
 */
var obj2 = {firstName: 'kobe', lastName:'bryant'};
Object.defineProperties(obj2,{
    fullname:{
        get: function () {
            return this.firstName +''+ this.lastName;
        },
        set: function (data) {
            console.log('set()',data)
            name = data.split(' ')
            this.firstName = name[0]
            this.lastName = name[1]
        }
    }
})

