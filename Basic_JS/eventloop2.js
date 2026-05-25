// Event loop

// Synchronous code
// Js is single threaded language so a single request is executed at one time
// until the first request gets finished, the second request won't be touched
// this means the JS is synchronous language
console.log("Hi");
console.log("Nayan");
console.log("Sonawane");


// Here, the problem is sometimes we get some functions to execute inside our call stack which blocks the execution 
// of next lined up requests which makes our server crashes and thus the next lined-up requests never get to call stack
// this is called as Blocking.


console.log("First request in the call stack");

function article(){
    return article();
};
article();

console.log("This request never gets on call stack");

// since the requests are ligned up in a synchronous way the last line never gets upto call stack because the call stack is 
// blocked at functional execution


// Asynchronous code
// Event loop
// This is a mechanism of JS that allows the runtime evnironment to manage the asynchronous operations and to execute the code
// in a non-blocking manner.