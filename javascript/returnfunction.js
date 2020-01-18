function a () {
    return function b() {
        console.log('b function')
    }
}

var bb = a()

bb()