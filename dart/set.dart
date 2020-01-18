void main(){
  //list 的超集，无法加入重复的数据
  var s = new Set();
  s.add('111');
  s.toList();
  s.add('111');
  s.add('222');
  print('$s');
  List arr= ['111','111','222','222','333','333'];
  print(arr);
  //使用ser类型转型
  var c = new Set();
  c.addAll(arr);
  print(c);
}