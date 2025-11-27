const results = [];

function sumValues(a, b) {
  return a + b;
}

for (let i = 0; i < 10; i++) {
  const firstValue = i * 5;
  const secondValue = i * i;
  const response = sumValues(firstValue, secondValue);
  results.push(response);
}

console.log(results);
