var obj = {
    age: '18',
    sex: "男",
    car: [
        "奔驰",
        "baoma",
        "tesila"
    ]
}
/**
 * 浅拷贝
 * 只是修改了对象属性的指针
 */
var obj2 = {

}

function extend(a,b) {
    for(var key in b){
        a[key] = b[key]
    }
    
} 
/**
 * 深拷贝
 * 将一个对象中的所有方法和属性复制一份给新的对象，
 */

 function deepExtend (a, b) {
     for(var key in b) {
         var template = b[key];
         if(template instanceof Array) {
             a[key] = []
             deepExtend(a[key], template)
         }else if( template instanceof Object){
             a[key] = {}
             deepExtend(a[key], template)
         }else if(template instanceof Function){
             console.log(template)
         }else{
            a[key] = template
         }
     }
 }
 var obj3 = {
    age: '18',
    sex: "男",
    car: [
        "奔驰",
        "baoma",
        "tesila"
    ],
    dog: {
        name: 'dahuang1',
        type: 'dog',
        sound: function () {
            console.log('wang!')
        }
    }
    
 }
 var o = {}
 deepExtend(o, obj3)
 console.log(o)
 console.log(obj3)
 //这种方法有个问题，就是不能复制方法