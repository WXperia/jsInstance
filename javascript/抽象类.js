// 将抽象类

function VehicleFactory (subType, superType) {
    if(typeof VehicleFactory[superType] === 'function') {
        function Fn(){}
        Fn.prototype = new VehicleFactory[superType]()
        subType.constructor = subType
        subType.prototype = new Fn()
    }else {
        throw new Error('没有创建此抽象类')
    }
}

VehicleFactory.Book = function () {
    this.type = 'Book'
}

VehicleFactory.Book.prototype = {
    getType: function () {
        throw Error('抽象类方法不能调用')
   },
    getName: function () {
        throw Error('抽象方法不能直接调用') 
    }
}

var Javascript = function () {
    this.name = 'Javascript'
}
VehicleFactory(Javascript, 'Book')
    Javascript.prototype.getName = function () {
        console.log(this.name)
    }
    Javascript.prototype.getType = function () {
        console.log(this.type)
    }
var js = new Javascript()
js.getName()
js.getType()