class Person {
  String name ;
  int age ;
  //默认构造函数
  Person([this.name='张三',this.age=23]);//构造函数的简写
  //命名构造函数
  Person.now(){
    print('now');
  }
  //命名构造函数
  Person.init(){

  }
  String getInfo(){
    return '${this.name}年龄${this.age}';
  }
  String getName(){
    return this.name;
  }
  void setAge(int age){
    this.age = age;
  }
  int getAge(){
    return this.age;
  }
  void setName(String name){
    this.name = name;
  }
  
}

// void main(){
//   Person p1 = new Person();
//   Person p2 = new Person('李四',2233);
//   print(p1.getInfo());
//   p1.setAge(18);
//   p1.setName('王大麻子');
//   print(p1.getInfo());
//   print(p2.getInfo());
// }