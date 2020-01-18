

void main (){
  int a = 1;
  //double既可以是整形也可以时浮点型
  double b= 1.32;
  print('$a$b');
  print(a+b);
  //boolen类型
  bool flg = true;
  bool flg2 = false;
  if(flg){
    print(flg);
    print(flg2);
  }
  

  int x = 1;
  String y = '1';
  //dart z中不会自动转换需要对比的类型
  if(x==int.parse(y)){
    print('x=y');
  }else{
    print('x!=y');
  }
   if(x.toString()==y){
    print('x=y');
  }else{
    print('x!=y');
  }
   String  c = '1';
   var one = int.parse(c);
   assert( one == 1);

}