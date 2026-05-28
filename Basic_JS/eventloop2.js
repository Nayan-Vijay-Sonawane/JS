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


// Event loop consists of 3 parts

// Callstack
// whenever a function is invoked, a corresponding frame is pushed onto the callstack. Because JS executes function in a 
// synchronous, single-threaded manner, it means only one operation is proccessed at a time.
// eg. functions are added to the callstack executed one by one and removed after completion.

// Browser
// It provides the execution environment to the JS. It includes the JS engine(eg. V8 in chrome) which interprets and executes JS
// code as well as various APIs for interacting with browser environment. 
// eg. It handles async tasks like setTimeout, fetch, DOM events.

// Task Queue(Callback Queue)
// This is where the async tasks are queued for the exeution once the callstack is empty.
// eg. includes DOM events, network requests, timeres.

// event loop
// It is the mechanism that continuosly checks callstack and the task queue. when the callstack is empty, the eventloop moves
// tasks from the task queue to callstack for execution. This process ensures that the async operations are handled in a 
// non-blocking manner while maintaining the single-threaded nature of JS

