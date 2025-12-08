function formatFeedback(feedback) {
  return feedback.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}
let feedback = "ThIs prODuct IS AmaZinG!";
console.log(formatFeedback(feedback));