// Hoisting 

// console.log(y);
console.log(x);
greet();

var x = 10;     // var variable are hoisted with 'undefined' 
const y = 20;   // const and let are hoisted with but remain in the temporal dead zone.
function greet(){
    console.log("Greeting...");
}


// Closure
// A closure is when a function remembers variables from the outer scope, even after that outer 
// function has finished executing.
function outer() {
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const myFun = outer();

myFun();
myFun();
myFun();

