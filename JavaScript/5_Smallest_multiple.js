let i = 1;
while(i){
    let isEven = true;
    for (let j = 1; j <= 20; j++) {
        if(i%j != 0) {
            isEven = false;
            break;
        }
    }
    if(isEven) {
        console.log(i);
        break;
    }
    i++;
}