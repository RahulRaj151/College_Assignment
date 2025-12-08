let date = new Date();
console.log(date);
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = date.getDate();
let year = date.getFullYear();
let monthIndex = date.getMonth();
let monthName = months[monthIndex];
console.log(`${monthName} ${day}, ${year}`);
