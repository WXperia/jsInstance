void main (){
  int a = 13;
  int b = 5;
  print(a+b);
  print(a-b);
  print(a*b);
  print(a/b);
  print(a%b);
  print(a~/b); //取整
  String price = '100.15648456164984';
  try {
    var myNum = double.parse(price);
    print(myNum);
    print(myNum is double);
  }catch(err){
    print(0);
  }
  //isEmpty 判断字符串是是否为空
  var str = '';
  if(str.isEmpty){
    print('空');
  }else {
    print('str不为空');
  }
  int mynum = 123;
  if(mynum == 0||null){
    print('0');
  }else{
    print('！0');
  }
}