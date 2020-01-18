/* const Person  = (function(){
    let _gender = [];
    function P(name,gender){
        this.name = name;
        _gender.push({
            obj:this,
                gender
        });
    }
    P.prototype.getGender = function(){
        return _gender.find(item=>item.obj == this).gender
    }
    P.prototype.setGender = function(newGender){
        let that = this
        _gender.forEach((item,index)=>{
            if(item.obj == this){
                _gender[index].gender = newGender
            }
        },that)
    }
    return P
})()

let p1 = new Person('xzq','男')
let p2 = new Person('xzq2','女')
p1.setGender('变态')
console.log(p1.getGender(),p2.getGender()) */

const Person  = (function(){
    let _gender = new WeakMap();
    let i = 0;
    class P {
        constructor(name, gender) {
            this.name = name;
            _gender.set(this, gender);
        }
        getGender() {
            return _gender.get(this);
        }
        setGender(newGender) {
            _gender.set(this, newGender);
            
        }
    }
   
    return P
})()

let p1 = new Person('xzq','男')
let p2 = new Person('xzq2','女')

console.log(p1.getGender(),p2.getGender())

//垃圾回收机制GC

//Map是弱引用形式，在外面修改map中充当健的对象，不会影响map内部的引用状态
//WeakMap是强引用形式，在外面修改会影响weakmap中的引用状态