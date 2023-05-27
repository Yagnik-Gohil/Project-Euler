const n = 100;
const sumOfSquare = n * (n + 1) * (2 * n + 1) / 6;
const squareOfSum = Math.pow(n * (n + 1) / 2, 2);
console.log(squareOfSum - sumOfSquare);