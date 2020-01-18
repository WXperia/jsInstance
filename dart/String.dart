void main (){
  var str = 'this is str';
  var str1 = "this is str1";
  print(str1);
  print(str);
  //建议定义变量时指定定义的类型

  String str2 = 'this is str2';
  String str3 = 'this is str3';

  print(str2);
  print(str3);
//三个单引号字符串可以换行输出
  String strn= '''4654
              this is str 222
              8945''';
  print(strn);
   String strn2= """
                4654
              this is str 222
              8945
                """;
  print(strn2);
  //字符串的拼接

  String str4 = '你好';
  String str5 = 'Dart';
  //+ $
  print(str4 + str5);
  print('$str4 $str5');

}