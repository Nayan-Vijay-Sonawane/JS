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
Promise.resolve().then(() => {
    console.log("4. Promise then (microtask)");
});

// queuMicrotask (microtask) 
queueMicrotask(() => {
    console.log("5. queueMircotask (mirotask)");
});

// async/await microtask
async function asyncFun() {
    console.log("6. async function start");
    await null;     // paused -> resumes as microtask
    console.log("7. async function resumed (microtask)");
};

asyncFun();

// Blocking code (blocks event loop)
for(let i=0; i < 1e7; i++){};       // simulate heavy work

console.log("8. script ends");
