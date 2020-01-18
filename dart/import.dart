import 'class.dart';
//引入
import 'privateAttr.dart';
void main(){
  Person p1 = new Person();
  print(p1.getInfo());
  Animal a1 = new Animal('狮子','猫科',3);
  a1.getInfo();
  a1.getName((name)=>{
    print(name)
  });
  print(a1.age);
  Map obj = new Map();
  
}
