// Callback
// A function that is passed as an argument to another function and executed later
// callback function can execute after another function has finished

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");