//main 方法没有返回值
import 'dart:math';

void main(){
  // var getName = (r)=>{
  //   print(r)
  // }; 
  // getName('6666');
  // printInfo('我是一个自动方法');
  // DateTime getNum(){
  //   return DateTime.now();
  // }
  // print(getNum());
  // print(createUsername());
  aa((a)=>{
    print(a)
  });
  print(getSum(100));
  print(getUser('谢子乾'));
}

void printInfo(e){
  print(e);
}
//定义了类型需要返回对应类型的值
String createUsername(){
  return '45645';
}

void aa(a){
  var b = '234';
  a(b);
}
double getSum(double n){
  double sum = 0;
  for(var i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}
//可选参数方法
String getUser(String name,[int age,String sex='未知']){
  String a = age??'年龄保密';
   return '$name+$a+$sex';
}
//方法的作用域