function studentReport(name, ...marks) {
    let total =0;
    function calculateavg(marks) {
        for(let mark in marks){
            total+=mark;
        }
        return total/marks.length;
    }
    let avg = calculateavg(marks);
    if (avg>=40) {
        return "Pass";
    }
    else{
        return "fail";
    }
}
console.log(studentReport("Rahul",20,100,40,30));
