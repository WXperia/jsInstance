void main(){
  // Cat c = new Cat();
  // c.say();
  // c.eat();
  //抽象方法无法被实例化
  Animal d = new Dog();
  Animal c = new Cat();
  c.eat();
  d.eat();
}
abstract class Animal {
  say(); //继承次抽象类的类必须实现这两个抽象方法;
  eat();
}

class Cat extends Animal {
  void say(){
    print('喵喵喵');
  }
  void eat(){
    print('小鱼干');
  }
  void run(){
    print('小猫在跑步');
  }
}
class Dog extends Animal {
  void say(){
    print('汪汪汪');
  }
  void eat(){
     print('小狗在吃骨头');
  }
  void run(){
    print('小狗在跑步');
  }
  
}