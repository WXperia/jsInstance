// import 'dart:_internal';
import 'dart:core';

abstract class Cache<T> {
  T getKey(String key);
  void setKey(T data, String key);
}

class Cache1 implements Cache<String> {
  var value ;
  Cache1(){
    this.value = new Map<String,String>();
  }
  @override
  getKey(String key) {
    // TODO: implement getKey
      return this.value[key];
  }

  @override
  void setKey(data, String key) {
    // TODO: implement setKey
    this.value[key] = data;
  }
}

void main() {
  Cache1 c1 = new Cache1();
  c1.setKey('12344656', 'test');
  print(c1.getKey('test'));
}
