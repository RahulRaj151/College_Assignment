let year = Number(prompt("enter the year"));
let lepayear = ((year%4===0 && year%100!==0) || (year%400==0))? "it is a leap yaer": "nope buddy wrong year"; // if year is divisible by 4 and not divisible by 100 or divisible by 400, then it is a leap year
console.log(lepayear);