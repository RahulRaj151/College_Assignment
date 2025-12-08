let bday = new Date(1998, 6, 15);
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = bday.getDate();
let month = months[bday.getMonth()];
let year = bday.getFullYear();
console.log(`${day} ${month} ${year}`);
