function fun1() {
    var a = 1;
    fun2()
    function fun2 () {
        var a =2
        fun3()
        function fun3 () {
            var a = 3
            function fun4() {
                var a = 4
                console.log(a)
            }
            fun4()
        }
    }
}
fun1()
var a = 1;
var b = a;
var c = b
a = 2;
console.log(a,b,c)
