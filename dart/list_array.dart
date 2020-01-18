void main(){
  var li = ['aa','bb','cc'];
  print(li);
  var li2 = new List();
  li2.add('张三');
  li2.add('王五');
  print(li2);
  //dart泛型
  var li3 = new List<int>();//只能放整数型
  var li4 = new List<String>();//只能放字符串型
  li4 = li;
  li3.add(1);
  li3.add(2);
  li3.add(3);
  print('$li4$li3');
}