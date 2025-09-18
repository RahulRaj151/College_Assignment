let Basic_salary= 50000;
let HRA= Basic_salary*0.2; //20% hra
let DA=Basic_salary*0.1; //10% da
let gross_salary=Basic_salary+HRA+DA;
let tax= gross_salary>10000?gross_salary*0.05:0; // if salary is more then 10000, then 5% tax have to pay

console.log('The total salary is '+(gross_salary-tax)); //total salary