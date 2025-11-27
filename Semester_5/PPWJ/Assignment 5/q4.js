let y = function(eventName, seats) {
    console.log("Booking confform");
}
function doIt(eventName, seats, execute) {
    if (seats>5) {
        console.log("Booking failed")
    }
    execute(y);
}