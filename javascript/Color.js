function inheritObject (o) {
    function f() {}
    f.prototype = o
    return new f()
}
function inheritPrototype(supClass,superClass) {
    var p = inheritObject(superClass.prototype)
    p.constructor = supClass;
    supClass.prototype = p;
}
function myMath() {
    if( !this instanceof myMath){
        return new myMath()
    }
    this.getRandom = function(o) {
        
        if(arguments.length){
            var ob = new Object()
            ob.max = o.max || 1
            ob.min = o.min || 0
            ob.fix = o.fix || 0
        }else{
            var ob = new Object()
            ob.max =  1
            ob.min =  0
            ob.fix =  1
        }
      return (Math.random()*(ob.max -ob.min)+ob.min).toFixed(ob.fix)
    }

}
// function myMath (min,max,fix) {
//     if(this instanceof myMath){
//         if(arguments.length){
//             this.min = min || 0;
//             this.max = max || 1;
//             this.fix = fix || 0;
//         }else {
//             this.min = 0;
//             this.max = 1;
//             this.fix = 1;
//         }
//     }else {
//         return new myMath(min,max,fix)
//     }
// }
// myMath.prototype.getRandom = function () {
//     return  (Math.random()*(this.max -this.min)+this.min).toFixed(this.fix)
// }
// inheritPrototype(Color,myMath)wdd
function Color() {
    myMath.call(this)
}

myMath.prototype.getRandom =  function (a) {
    return parseInt(Math.random()*a)
}
Color.prototype.getColor = function (type) {
    
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    var colorstr = ''
    if(type == 'Ox'){
        for (var i=0; i<6; i++) {
            var a = this.getRandom({fix:'0'})
            colorstr += arr[a]
        }
        
        return colorstr
    }else if (type == 'rgb'){
     colorstr = 
     'rgb('+
     this.getRandom({max:255,min:0})+','+
     this.getRandom({max:255,min:0})+','+
     this.getRandom({max:255,min:0})+')'
     
     return colorstr
    }else if (type == 'rgba'){
        colorstr = 'rgba('+this.getRandom({max:255,min:0})+','+this.getRandom({max:255,min:0})+','+this.getRandom({max:255,min:0})+','+this.getRandom()+')'
        
        return colorstr  
    }
}

var color = new Color()
color.getRandom();