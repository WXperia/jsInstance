function getType() {
    
}
var a = 0;
var arr = [];
// console.log(typeof arr)

function fn(){
    this.a = 0;
    this.b = function (){
        console.log(this.a)
    }
}

fn.prototype = {
    b:function(){
        this.a = 20;
        alert(this.a);
    },
    c: function(){
        this.a = 30;
        (function(){
            console.log(this.a)
        })() 
    }
}

var myfn = new fn()

myfn.b()
myfn.c()