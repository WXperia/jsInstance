void main(){
  var persion = {
    'name':'小明',
    'age':100,
    'default': false,
    'work':['程序员','厨师']
  };
  
  print(persion);
  print(persion['work']);
  //第二种定义方式
  var p = new Map();
  p['name'] = '小红';
  p['age'] = 102;
  p['work'] = ['吃饭','睡觉','打豆豆'];
  print(p);
  //类型的判断
  //常用属性
  print(persion.keys.toList());
  print(persion.isEmpty);
  print(persion.values.toList());
  persion.addAll({
    'sex': 'boy',
    'height': '180cm'
  });
  print(persion);
  persion.remove("sex");
  print(persion);
  //查找
  persion.containsValue('小明');
  print(persion.containsValue('小明'));
  //查找是否有这个key
  print(persion.containsKey('work'));
  persion.remove('work');
  print(persion);
  //map 的遍历
  persion.forEach((key,v){
    print('$key---$v');
  });
//  Map a = persion.map((k,v){
//       print('$k,$v');
//  });
  //any ,every 
  //有一个满足就返回true
  var arr = new List<String>();
  arr.addAll(['a','b','c','d']);
  var f = arr.any((v){
    return v =='a';
  });
  print(f);
  //所有的元素都满足，才返回true
  var k = arr.every((v){
    return v == 'a';
  });
  print(k);


}