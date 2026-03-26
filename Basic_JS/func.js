// A function is a reusable block of code used to perform a task.

function greet() {
    console.log("Hello");
};

greet();

// Types of functions
// 1. Function Declaration
function add(a, b){
    return a + b;
};
// can call before declaration(Hoisted)

console.log(add(2, 3));

// 2. Function Expression
const add1 = function(a, b){
    return a - b;
};

// 3. Arrow Function


// 4. Callback Function
// function that takes callback
function greeting(name, callback){
    console.log("Hello " + name);
    callback(); // Executing the callback
}

// callback function
function sayGoodbye(){
    console.log("Goodbye!");
};

// passing sayGoodbye as a callback to greet
greeting("Nayan", sayGoodbye);


function hello(){
    let x = 100;
}

console.log(x);
hello();