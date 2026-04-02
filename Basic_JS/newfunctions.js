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