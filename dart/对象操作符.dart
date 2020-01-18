class Person {
  String name;
  num age;
  Person([this.name='张三',this.age=12]);
  Person.run(){
    print('${this.name}');
  }
  void printInfo(){
    print('${this.name}+${this.age}');
    
  }
  void fun1(){
    print('1');
  }
  void fun2(){
    print('2');
  }
  void fun3(){
    print('1');
  }
  void fun4(){
    print('1');
  }
}
void main(){
  //is条件运算符
  Person p1 = new Person();
  p1..fun1()
    ..fun2()
    ..fun3()
    ..fun4();
  if(p1 is Person){
    p1.printInfo();
  }
  if(p1 is Object){
    p1.printInfo();
  }
  //as 类型转换
  var p2 ;
  p2 = '';
  p2 = new Person();
  (p2 as Person).printInfo();
  //级联操作 。。 
  var h1 = new Human('王二',6,'男');
  h1.printInfo();
}
class Human extends Person{
  String sex;
  Human(String name,num age,String sex) : super(name, age){
    this.sex = sex;
  }
}
