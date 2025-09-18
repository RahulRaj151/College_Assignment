let rollno=Number(prompt("enter your rollno :"));
let qualify=(rollno%3==0) && (rollno%5==0) ? "you are qualified for relay race":"Not Qualified for relay race"; //if rollno is divisible by 3 and 5 then only he is qualified 
console.log(qualify);