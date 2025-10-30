let sales = [
    {
        day: "Monday",
        sale: 10
    },
    {
        day: "Tuesday",
        sale: 20
    },
    {
        day: "Wednesday",
        sale: 30
    },
    {
        day: "Thursday",
        sale: 40
    },
    {
        day: "Friday",
        sale: 50
    },
    {
        day: "Saturday",
        sale: 60
    },
    {
        day: "Sunday",
        sale: 70
    }
]
let totalsale = 0;
let avgsale = 0;
for (let item of sales) {
    totalsale += item.sale;
}
avgsale = totalsale / 7;

let highday = sales[0].day;
let lowday = sales[0].day;
let maxSale = sales[0].sale;
let minSale = sales[0].sale;

for (let item of sales) {
    if (item.sale > maxSale) {
        maxSale = item.sale;
        highday = item.day;
    }
    if (item.sale < minSale) {
        minSale = item.sale;
        lowday = item.day;
    }
}
console.log("The total Sale this week is: " + totalsale);
console.log("Total Average sale this week: " + avgsale);
console.log("Highest paying day this week: " + highday);
console.log("Lowest paying day this week: " + lowday);
