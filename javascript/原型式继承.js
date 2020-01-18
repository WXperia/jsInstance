function inheritObject(o) {
    //利用过渡对象
     function Fun() {
    }
    // class Fun {
    //     constructor() {
    //     }
    // }
    Fun.prototype = o
    return o
}

// 因为也是在 prototype上做文章所以，所有用此方法创建的实例，都会公用一个引用类型变量池
function Book() {
    this.name = '666'
}
Book.prototype.getName = function () {
    console.log(this.name)
}
var book = {
    name: 'javascript',
    likebooks: ['css','c++','typescript']
}
// book.prototype.getName = function () {
//     console.log(this.name)
// }
var b1 = inheritObject(book)
var b2 = inheritObject(book)
var b3 = inheritObject(Book)
var b4 = new Book()
b1.name = 'ts'
b1.likebooks.push('nonono')
b2.name = 'html'
b2.likebooks.push('hhbook')
console.log(b1.name)
console.log(b1.likebooks)
console.log(b2.name)
console.log(b2.likebooks)
console.log(book.likebooks)
console.log(b3.prototype)
b4.getName()
