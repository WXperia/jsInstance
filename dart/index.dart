void main(){
  // var str = '你好dart';
  var myNUm = 121;
 
  print(myNUm);
  //Striing定义字符串
  String str = '你好Dart';
  int initNum = 1213;
  print(str);
  print(initNum);
  //const 不能修改定义时必须赋值
  // final 定义时可以不赋值，后期可以赋值一次
  const PNAME = '666666';
  final P_NOe = '444444';
 
  print(PNAME+P_NOe);
  final time = DateTime.now();
  print(time);
  //const time = DateTime.now(); //报错
  //final 可以获得异步方法内的变量，const只能直接获取常量
}
/* 
  dart类型校验
  变量和常量
  var  //自动推断类型
  //强类型的定义的变量不能存放其他类型的值
  String
  int
  double
  bool
  常量
  const 
  final
  不可再次改变的值
   */
