// 新建一个安全类

function Factory(type, content) {
    if(this instanceof Factory) {
        var o = new this [type](content);
        return o
    }else {
        return new Factory(type, content)
    }
    //防止其他人错误使用
}

Factory.prototype = {
    Book: function (content) {
        this.name = content
        this.getName = function() {
            console.log(this.name)
        }
        // var _name = '_'+content+'_'
        // return {
        //     _getName: function() {
        //         console.log(_name)
        //     }
        // }
        // 这样热return实际上也是在this上挂载对象
        
    },
    addMethod: function (type,fun) {
        Factory.prototype[type] = fun
    },
    
}
var b1 = new Factory('Book','javascript')

console.log(b1.name)
b1.getName()
