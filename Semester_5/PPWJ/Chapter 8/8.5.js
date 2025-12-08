let str = "I love JavaScript";
str = str.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    str = str.replaceAll(vowels[i], i.toString());
}
console.log(str);