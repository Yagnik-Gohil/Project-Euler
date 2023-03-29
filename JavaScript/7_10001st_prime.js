let count = 0;
let i = 2;
while (true) {
    let isPrime = true;
    let j = 2;
    const upperLimit = parseInt(i / 2);
    while (j <= upperLimit) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
        j++;
    }
    if (isPrime) {
        count++;
    }
    if (count == 10001) {
        console.log(i);
        break;
    }
    i++;
}