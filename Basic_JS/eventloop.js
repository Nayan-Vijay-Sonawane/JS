// Hoisting 

console.log(y);
console.log(x);
greet();

var x = 10;     // var variable are hoisted with 'undefined' 
const y = 20;   // const and let are hoisted with but remain in the temporal dead zone.
function greet(){
    console.log("Greeting...");
}