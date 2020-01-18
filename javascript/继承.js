

//----------------类继承--------------------
// 父类
function SuperClass() {
    this.superValue = true;
    this.childs = {
        name:'666'
    }
    return this //如果去掉这行 实例 suc1 为 undefined
}
var suc = new SuperClass();
//类的实例对象是没有prototype的
console.log(suc.prototype)
var suc1 = SuperClass()
console.log(suc1.superValue)
// 父类公共方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}
//子类
function SupClass () {
    this.SupValue = false;
    
}
//子类公共方法
SupClass.prototype = new SuperClass();
//继承父类
SupClass.prototype.getSupValue = function () {
    return this.SupValue
}

var sup = new SupClass();

console.log(sup.getSuperValue())
//使用instanceof 判断是否为此类的实例
// 输出结果 true true
console.log(`
${sup instanceof SupClass}
另一个 
${suc instanceof SuperClass}`
) 
//输出结果 false 因为SupClass只是SuperClass的子类
console.log(SupClass instanceof SuperClass)
//因为 SupClass.prototype = new  SuperClass()
// So  输出结果为 true
console.log(SupClass.prototype instanceof  SuperClass)
// 因为直接使用子类的 prototype来继承父类 所以父类中的引用类型，即 this上挂载的类型
// 会多个子类公用
var instance1 = new SupClass()
var instance2 = new SupClass()
instance2.childs.sex = 'girl'
console.log(instance1.childs);

//
//--------------类继承----------------

//--------------构造函数继承---------------
// 这是父类
/* function Book (name) {
    if(!this instanceof Book) {
        return new Book() //防止错误使用此类
    }
    this.name =  name || 'notName'
    this.books = [
        'javaScript',
        'Html',
        'CSS'
    ]
}
Book.prototype.getBooks = function () {
    console.log(this.books)
    return this
}
// 建一个子类
function cBook (name) {
    //构造函数继承的精髓。
    Book.call(this,name)

} */
    //call 会改变 Book构造函数的作用域，这样就变成

  /*   function Book (name) {
        cBook.name = name || 'notName'
        cBook.books = [
            'javaScript',
            'Html',
            'CSS'
        ]
    } 
    都这样了，cBook自然会继承到Book的所有引用类型的值，
    但是并不会继承 Book.prototype上的共有方法。如果要公用此方法
    就需要将他放在tthis引用类型下。
    */
//    缺点：在this下的变量，每个实例对象都是独享一份的，违背了代码复用的原则

/* var book = new cBook('666');
var book2 = new cBook('777');
var book3 = new Book('mlml');
book.books.push('6666')
book3.getBooks()
console.log(book.books)
console.log(book2.books)
console.log() //报错 TypeError: book.getBooks is not a function */

/*            ---输出结果---
[ 'javaScript', 'Html', 'CSS', '6666' ]
[ 'javaScript', 'Html', 'CSS' ] 

*/

//--------------构造函数继承---------------

//--------------组合继承---------------

function Book (name) {
    if(!this instanceof Book) {
        return new Book() //防止错误使用此类
    }
    this.name =  name || 'notName'
    this.books = [
        'javaScript',
        'Html',
        'CSS'
    ]
}
Book.prototype.getBooks = function () {
    console.log(this.books)
    return this
}
// 建一个子类
function cBook (name) {
    //构造函数继承的精髓。
    Book.call(this,name)

}
cBook.prototype = new Book();

var book = new cBook('1111');

var book2 = new cBook('2222')

var book3 = new Book('4444')

book.getBooks()
book2.books.push('C++')
book2.getBooks()
console.log(book.name)
console.log(book2.name)
console.log(book3.name)
console.log(cBook.prototype instanceof Book)
console.log(cBook instanceof Book)