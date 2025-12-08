let sentence = "thIs will be capiTalized for each word";
function capitalizeWords(str) {
    str = str.toLowerCase();
    let words = [];
    let wordArray = str.split(" ");
    wordArray.forEach(function(word) {
        let firstLetter = word.slice(0,1).toUpperCase();
        let restOfWord = word.slice(1);
        let capitalizedWord = firstLetter + restOfWord;
        words.push(capitalizedWord);
    });
    let result = words.join(" ");
    return result;
}
console.log(capitalizeWords(sentence));
