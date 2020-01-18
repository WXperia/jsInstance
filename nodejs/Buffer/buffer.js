let bf1 = new Buffer('miaov');

let b3 = new Buffer('miaov');

console.log(bf1)
console.log(b3)
//对象之间的比较都是false
console.log(bf1 == b3)
//使用对象实现的equals方法进行比较
console.log(bf1.equals(b3))