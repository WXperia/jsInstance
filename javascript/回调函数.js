function a(callback){
    
    setTimeout(function(){
        console.log('a');
        return callback;
    })
    
}
function b(callback){
    console.log('b');
    return  callback;
}
function c(callback){
    console.log('c');
    
    return  callback;
}
a()
setTimeout(function(){
    c(b())
})