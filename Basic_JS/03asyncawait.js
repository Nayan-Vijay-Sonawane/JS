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
            // const inStock = 4;
            // resolve(inStock);
            reject(new Error("Failed to check the Inventory!"));
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
};

function chargePayment(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Charging the Payment.....");
            resolve();
        }, 2000);
    });
    return promise;
};

function sendInvoice(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending the Invoice.....");
            resolve();
        }, 1000);
    });
    return promise;
};

async function main(){
    // const inStock = await checkInventory();
    // console.log("inStock: ", inStock);
    // await checkInventory();
    // await createOrder();
    // await chargePayment();
    // await sendInvoice();

    // using try/catch 
    try{
        await checkInventory();
    }
    catch(err){
        console.log("err", err);
    };

    try{
        await createOrder();
    }
    catch(err){
        console.log("err", err);
    };

    try{
        await chargePayment();
    }
    catch(err){
        console.log("err", err);
    };

    try{
        await sendInvoice();
    }
    catch(err){
        console.log("err", err);
    }


}

main();

// Its the cleanest way to handle the promises that is with try/catch block

// Fetch API
// The fetch API provides an interface for fetching the resources. It is more powerful and flexible replacement for
// XMLHttpRequest