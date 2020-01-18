var BOOK = function (o) {
    if(this instanceof BOOK ) {
        this.title = o.title || ''
        this.name = o.name || ''
        this.type = o.type || ''
    }else {
        return new BOOK(o)
    }
} 

var book = {
    title:'666',
    name: '777',
    type: '888'
}

var book2 = {
    title: '3',
    name: '4',

}

var book1 = new BOOK(book2)
console.log(book1)
var book3 = BOOK(book)
console.log(book3)