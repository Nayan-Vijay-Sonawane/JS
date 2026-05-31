// Async await
// async/await provides more concise and readable way to work with promises, making asynchronous code appears synchronous
// async -> makes a function to return a Promise
// await -> waits for a promise to finish
// await can only be used inside an async function
// Promise fulfilled -> returns value
// Promise rejected -> goes to catch block
// try/catch handles errors
// Async/await makes asynchronous code looks synchronous

{/*
async function getData(){
    setTimeout(() => {
        console.log("I am inside the Timeout block ");
    }, 3000);
};

getData();
    
*/}

// 

function checkInventory(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Checking the Inventory.....");
            resolve();
        }, 2000);
    });
    return promise;
};

function createOrder(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating the Order.....");
            resolve();
        }, 1000);
    });
    return promise;
}

async function main(){
    await checkInventory();
    await createOrder();
}

main();