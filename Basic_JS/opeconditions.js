// Operators and Conditionals

// Check even/odd

function isEven(n){
    let rem = n % 2;
    if(rem == 0){
        return true;
    }
    else{
        return false;
    }
}

let n = 14;
if(isEven(n)){
    console.log("The number is Even");
}
else{
    console.log("The number is false");
}