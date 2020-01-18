/* 
  对象类型的判断

 */

void main (){
  var str  = '1234';
  if(str is String){
    print('是String类型');
  }else if (str is int){
    print('int型');
  }else{
    print('其他类型');
  }
}