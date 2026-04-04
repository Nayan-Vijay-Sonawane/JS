// Factorial of a number

function fact(n){
    if(n <= 0){
        return "Invalid";
    }
    let result = 1;

    for(let i=1; i<=n; i++){
        result = result * i;
    }
    return result;
}

console.log(fact(5));