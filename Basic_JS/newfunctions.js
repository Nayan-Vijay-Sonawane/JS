// Functions
// functions are just a reusable blocks of code designed to perform a specific task.

// Function Statment or Function Declaration
function a() {
    console.log("a called");
};

// Function Expression
// Assign a function to variable
const b = function(){
    console.log("b called");
};

// Anonymous Function
// Function that does not have name
const c = function(){
    console.log("C called");
};

a();
b();
c();

// Arrow Function 
// Just a shorter version of function 
const num = n => n*n;
console.log(num(5));

// Immediately invoked Function Expression (IIFE)
// They are immediately inovoked after the declaration
const result = (function(){
    let x = 5;
    let y = 10;
    return x + y;
})();

console.log(result);

// Callback Function
// It is passed as an argument to another function 
function greeting(name, callback){
    console.log("Hello " + name);
    callback();     // Executing the callback
}

function sayGoodbye(){
    console.log("Goodbye");
};

greeting("Nayan", sayGoodbye);

// High Order Function
// A Function either takes another function as a parameter or returns another function
function multiple(factor){
    return function(number){
        return number * factor;
    };
};
const double = multiple(5);
console.log(double(2));

// Pure Function
// A Function returns same output for the same input and do not produce side effects
// modifying global variable or changing the input data
function add(a, b){
    return a + b;
}
console.log(add(2, 3));

// Questions

// Calculator function

function calculator(a, b, operator){
    if(operator === "add"){
        return a + b;
    }
    else if(operator === "subtract"){
        return a - b;
    }
    else if(operator === "multiply"){
        return a * b;
    }
    else if(operator === "divide"){
        if(b === 0){
            return "Cannot divide by zero";
        }
        return a / b;
    }
    else{
        return "Invalid";
    }
};

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 5, "new"));

// Palindrome check

function isPalindrome(){
    
}