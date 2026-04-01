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
    if(a>=b && a>= c){
        console.log(a + " is the largest number");
    }
    else if(b>=c && b>=a){
        console.log(b + " is the largest number");
    }
    else{
        console.log(c + " is the largest number");
    }
}

largest(11, 26, 84);


// Grade system

function grade(score){
    if(score >= 90){
        return 'A';
    }
    else if(score > )
}