void main(){
  List myList = ['1','2','3','4','5'];
  print(myList.length);
  print(myList.isEmpty);
  print(myList.isNotEmpty);
  print(myList.reversed);
  List newList = myList.reversed.toList();
  print(newList);

  myList.addAll(['name','hahaah','dasdasdas']);//数组末尾添加
  print(myList);//
  //inedexOf
  print(myList.indexOf('1'));//查找数据，查找到返回索引，查找不到返回-1
  myList.remove('1');
  print(myList);//
  myList.removeAt(0);
  print(myList);//
  myList.removeLast();
  print(myList);//
  myList.fillRange(1, 2,'4545648746464');
  print(myList);//
  myList.insert(1,'aaa');
  print(myList);
  myList.insertAll(1, ['321312','66654']);
  print(myList);

  String a = '18379752858';
  print(a);
  var b = myList.join('');//数组转字符串
  var c = a.split('');//字符串转数组
  print(b);
  print(c);
  
}