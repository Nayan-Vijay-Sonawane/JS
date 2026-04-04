// Count digits

function countdigi(num){
    num = Math.abs(num);    // handle negative numbers
    let count  = 0;

    while(num>0){
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countdigi(2568197));