
// Compile Time error

// syntax error
// console.log(p;

// Runtime error

// Reference error
// console.log(x);


// Error Handling 
//  try-catch
// If try block may have errors then catch block is executed
function fullName(value){
    if(typeof value !== String){
        throw new Error("Its not a string");
    }
    return value;
};

try{
    console.log(fullName("Naan"));
}
catch(e){
    console.log(e.message);
}

// Example
function withdrawMoney(balance, amount){
    try{
        if(amount > balance){
            throw new Error("Insufficient Balance");
        }
        console.log("Transaction successfull! ");
        console.log("Remaining balance:", balance-amount);
    }
    catch(e){
        console.log("Transaction failed", e.message);
    }
}

withdrawMoney(5000, 7000);
withdrawMoney(10000, 7000);

// finally 
// This will not depend on anyone it will run everytime

try{
    console.log("Try block starts here");
    // error -> reference error
    console.log(x);
    console.log("Try block ends here");
}
catch(err){
    // retry logic // fallback mechanism // logging
    // custom error
    console.log("I am in the catch block");
    console.log("Error message: ", err);
}
finally{
    console.log("I will run everytime because I am in the finally block")
}

