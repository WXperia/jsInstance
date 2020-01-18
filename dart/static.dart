class Person {
  static String name = '张三';
  //j静态成员是用来公用成员
  static String getName(){
    return Person.name;
    //静态方法只能访问静态成员
    //静态成员可以被非静态方法访问
  }
  Person([name]){
    Person.name = name;
  }
  void getStaticVal(callback){
    callback(Person.name);
  }
}
void main(){
  var p = new Person('王五');
  print(Person.getName());
  p.getStaticVal((name){
     print(name);
  });
}