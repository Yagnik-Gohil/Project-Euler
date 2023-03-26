let number = 600851475143;
const upperLimit = parseInt(Math.sqrt(number) / 2);
const factors = [];
let i = 2;
while (i <= upperLimit) {
    if (number % i == 0) {
        let isPrime = true;
        let j = 2;
        const innerUpperLimit = parseInt(i / 2);
        while (j <= innerUpperLimit) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
            j++;
        }
        if (isPrime) {
            factors.push(i);
        }
    }
    i++;
}
console.log(Math.max(...factors))