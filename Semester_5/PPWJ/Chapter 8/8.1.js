let str1 = "How's it going?";

console.log("Encoded str1:", encodeURIComponent(str1));

let encodedStr1 = encodeURIComponent(str1);
console.log("Decoded str1:", decodeURIComponent(encodedStr1));
console.log("Decoded 'How's%20it%20going%3F':", decodeURIComponent("How's%20it%20going%3F"));

let baseURI = "http://www.basescripts.com";
let param = "Hello World";
let fullURI = baseURI + "?param=" + encodeURIComponent(param);

console.log("Encoded URI:", encodeURIComponent(fullURI));
