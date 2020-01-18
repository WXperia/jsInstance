class Person {
    constructor (name = `user`,password =`12345`){
        this.name = name;
        this.password = password;
    }
    getName(){
        console.log(this.name)
    }
}
//继承

class Student extends Person {
    //如果子类也要使用constructor那么在
    constructor(name,password,type){
        super(name,password);
        this.type = type;
    }
}

let s1 = new Student('谢子乾','321312','user')

s1.getName()
