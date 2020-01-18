void main (){
  List arr = [1,2,3,4,5,6,7];
  // 箭头函数只能写一行
  List lis = arr.map((v)=> v>2? v*2:v).toList();
  print(lis);
  bool isEvenNunber(int n){
    return n%2 == 0? true : false;
  }
  print(isEvenNunber(3));
}