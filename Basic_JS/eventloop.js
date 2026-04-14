// Event Loops
// 

console.log("1. Script start");

// setTimeout (macrotask)
setTimeout(() => {
    console.log("2. setTimeout callback (macrotask)");
}, 0);

// setInterval (macrotask)
setInterval(() => {
    console.log("3. setInterval callback (macrotask)");
}, 1000);

// Promise (microtask)
Promise.resolve.then(() => {
    console.log("4. Promise then (microtask)");
});

// queuMicrotask (microtask)
queueMicrotask(() => {
    console.log("5. queuMircotask (mirotask)");
});

// 