//build-in methods
let s = "Hello";
console.log(
    s.concat(" there!")
    .toUpperCase()
    .replace("THERE", "you")
    .concat(" You're amazing!")
);

//decoding and encoding
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

//aray method
let array = [" fgh",4,5,6,7,"asd","time"]
function print(element, index) {
    console.log(element, " is in the posiotin of ", index);
}
array.forEach(print)

//filter method
function check(element, index) {
    return typeof element=="string"
}
let f = array.filter(check)
console.log(f);
console.log(array.every(check));