void main(){

}
// implements

//建议使用抽象类定义接口
// 定义一个DB 库，支持三大数据库
abstract class DB {
  add(String data);
  del();
  update();
  String url;

}
class Db2 implements DB {
  @override
  String url;

  @override
  add(String data) {
    // TODO: implement add
    throw UnimplementedError();
  }

  @override
  del() {
    // TODO: implement del
    throw UnimplementedError();
  }

  @override
  update() {
    // TODO: implement update
    throw UnimplementedError();
  }
  
}
class Mysql implements DB{
  //重写方法的注解
  @override
  String url;
  add(String data) {
    // TODO: implement add
    return null;
  }

  @override
  del() {
    // TODO: implement del
    return null;
  }

  @override
  update() {
    // TODO: implement update
    return null;
  }

}