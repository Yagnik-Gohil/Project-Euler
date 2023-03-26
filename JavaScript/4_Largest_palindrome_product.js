const palindrome = [];
for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
        let str = (i*j).toString()
        if(str == str.split("").reverse().join("")) palindrome.push(i*j);
    }
}
console.log(Math.max(...palindrome));