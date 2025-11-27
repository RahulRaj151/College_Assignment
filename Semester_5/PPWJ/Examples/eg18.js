// nested with return
function addNos(a) {
    function add(b) { 
        return a+b;
     }
     return add;
}
