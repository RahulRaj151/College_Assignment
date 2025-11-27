function leap_year(year) {
    if (year%4===0 && year%100!==0 || year%400==0) {
        return 1;
    }
    else{
        return 0;
    }
}
let date = parseInt(prompt("Enter the day: "));
let month = parseInt(prompt("Enter the month: "));
let year = parseInt(prompt("Enter the year:"));

function totaldays(date, month, year){
let months =[31,28,31,30,31,30,31,31,30,31,30,31];
    if (leap_year(year)) {
        months[1] = 29;
    }
    let total = 0;
    for (let i = 0; i < month-1; i++) {
        total +=months[i];
    }
    total += date;
    return total;
}
let result = totaldays(date, month, year)
console.log(result);

