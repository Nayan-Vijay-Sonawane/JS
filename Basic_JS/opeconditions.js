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

// Find the largest of 3 numbers

function largest(a,b,c){
    if(a>b){
        console.log("A is greater");
    }
    else if(b>c){
        console.log("B is greater");
    }
    else if(c>a){
        console.log("C is greater");
    }
}

largest(5, 6, 8);
