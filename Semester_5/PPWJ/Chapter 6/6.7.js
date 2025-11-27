let start = 10;
function countdown(value) {
    if (value > 1) {
        return;
    }
    countdown(value-1);
}
countdown(start);
function countdownSec(value) {
    if (value > 0) {
        console.log(value)
        countdownSec(value-1);
    }
    return;
}
countdownSec(start);
