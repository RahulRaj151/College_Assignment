let concertDate = new Date("December 31, 2025 23:59:59");
let now = new Date();
let diffMs = concertDate - now;
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
let diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
console.log(`${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes left`);
