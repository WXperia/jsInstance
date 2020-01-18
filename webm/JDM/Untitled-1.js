function tab(d){
  var d = new Date(d).getTime();
  var nDate = Date.now();
  if(d > nDate)
    return false;
    return true;
}
console.log(tab('2020-12-12'));