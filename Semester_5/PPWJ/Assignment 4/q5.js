let caseSelection = parseInt(prompt("Enter case selection (1 for 0-100 units, 2 for 101-200 units, 3 for above 200 units):"));
let units = parseInt(prompt("Enter total units consumed:"));
let rate;
let totalBill;

switch (caseSelection) {
    case 1:
        rate = 5;
        break;
    case 2:
        rate = 7;
        break;
    case 3:
        rate = 10;
        break;
    default:
        alert("Invalid case selection.");
        break;
}

if (rate == 5) {
    //rate = 5
    totalBill = units * rate;
    alert(`Total Electricity Bill: Rs.${totalBill}`);
} else if(rate == 7){
    //rate = 7
    totalBill = ((units-100)* 7)+500;
    alert(`Total Electricity Bill: Rs.${totalBill}`);
}
else{
    //rate = 10 
    totalBill = ((units-200)* 10)+500+700;
    alert(`Total Electricity Bill: Rs.${totalBill}`);
}
