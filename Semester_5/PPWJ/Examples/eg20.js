//call back Function
let y = function(){
    console.log("call back function");
}
//it is a fuction taken as argument
function doIt(execute) {
    execute();
    console.log("inside do it function");  
}
doIt(y);
setTimeout(y,1000);