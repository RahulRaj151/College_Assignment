const descriptiveWords = ['brilliant', 'amazing', 'fantastic', 'wonderful', 'incredible'];
greetUser();
function greetUser() {
    const name = prompt('Please enter your name: ');
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];
    console.log(`Hello, ${name}! You are ${randomWord}!`);
}
