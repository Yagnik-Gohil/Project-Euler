let previous = 1;
let current = 2;
let sum = 0;
while(current<4000000){
    if(current%2 == 0) sum+= current;
    current = previous + current;
    previous = current - previous;
}
console.log(sum);