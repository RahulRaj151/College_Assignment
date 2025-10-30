let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3, 5];

console.log('1. Display all elements of the array.');
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' ';
}
console.log('Array elements:', str.trim());

console.log('\n2. Calculate and print the sum, maximum, and minimum value of the array.');
let sum = 0;
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
console.log('Sum:', sum);
console.log('Maximum:', max);
console.log('Minimum:', min);

console.log('\n3. Count and display how many numbers are even and how many are odd.');
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
}
console.log('Even numbers:', even);
console.log('Odd numbers:', odd);

console.log('\n4. Reverse the array and print the reversed version.');
let reversed = [];
let ridx = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    reversed[ridx] = arr[i];
    ridx++;
}
str = '';
for (let i = 0; i < reversed.length; i++) {
    str += reversed[i] + ' ';
}
console.log('Reversed array:', str.trim());

console.log('\n5. Search for a specific element in the array and display its index (if present).');
let element = 4;
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
        console.log('Element', element, 'found at index:', i);
        found = true;
        break;
    }
}
if (!found) {
    console.log('Element', element, 'not found');
}

console.log('\n6. Remove duplicates from the array and show the resulting array.');
let unique = [];
let uidx = 0;
for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uidx; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        unique[uidx] = arr[i];
        uidx++;
    }
}
str = '';
for (let i = 0; i < uidx; i++) {
    str += unique[i] + ' ';
}
console.log('Array after removing duplicates:', str.trim());

console.log('\n7. Sort the array in ascending order using loops only.');
let sorted = [];
for (let i = 0; i < arr.length; i++) {
    sorted[i] = arr[i];
}
for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[j] > sorted[j + 1]) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
        }
    }
}
str = '';
for (let i = 0; i < sorted.length; i++) {
    str += sorted[i] + ' ';
}
console.log('Sorted array:', str.trim());
