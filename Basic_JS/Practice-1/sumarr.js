// Sum of Array

function sumArr(num){
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}

console.log(sumArr([1, 2, 3, 4]));