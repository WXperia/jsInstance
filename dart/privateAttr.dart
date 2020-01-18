class Animal {
  String _name;
  String _type;
  int age;
  Animal([this._name,this._type,this.age]);
  void getName(callback){
    callback(this._name);
  }
  void getInfo(){
    print('${this._name}+${this._type}+${this.age}');
  }
}