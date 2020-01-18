import 'dart:html';

void main(){
  throw new FormatException('new Error');
  /// 还可以在 箭头函数
  ///抛一个自定义异常
  distanceTo(Point other) {
    //直接抛出一个map需要讲UnimplementedError 用map 包裹起来
    var set = {
        throw new UnimplementedError()
      };
        return set;
  }
  ///对于多个异常，使用 on 异常类型来处理多种类的异常
    try{
      double a = 1.1;
      int b = int.parse(a);
    } on OutOfMemoryError {

    } on Exception catch(e) {
      print('Unknown exception : $e');
    }catch(e){
      print('未知错误： $e');
    } finally {
      ///无论是否有异常都会执行finally内的函数
    }
  }
