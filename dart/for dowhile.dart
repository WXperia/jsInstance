void main(){
  for(int i = 1; i<=10; i++){
    print(i);
  }
  //数组遍历
  var lis = new List();
  lis.add({
    'name':111,
    });
  for(int i = 1;i<=10;i++){
    lis.add({'$i':i});
  }
  print(lis);

}