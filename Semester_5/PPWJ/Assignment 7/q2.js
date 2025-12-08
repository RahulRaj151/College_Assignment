let name = "John & Sons";
let encoded = encodeURIComponent(name);
console.log(encoded);
let decoded = decodeURIComponent(encoded);
console.log(decoded);
