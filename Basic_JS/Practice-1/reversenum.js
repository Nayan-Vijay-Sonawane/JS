// Reverse a number

function revnum(n){
    let reverse = 0;

    while(n > 0){
        reverse = (reverse * 10)+(n % 10);
        n = Math.floor(n / 10);
    }
    return reverse;
}

const num = 12345;
console.log(num)
console.log(revnum(num));