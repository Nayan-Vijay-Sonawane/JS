// Promises
// A promise is an object represents the eventual completion of an asynchronous operation and its resulting value.
// promise has three states
// Pending   -> Initial state neither fulfilled nor rejected
// Fulfilled -> The operation completed successfully
// Rejected  -> The operation is failed

{/*

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("Operation completed successfully!");
    }
    else{
        reject("Operation is failed");
    }
});   

console.log(myPromise);

*/}

// To fix the callback hell we use promises

function checkInventory(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Checking the Inventory....");
        // resolve();
        reject(new Error("Failed to check the Inventory!"));
    }, 2000);
    });
    return promise;
};

function createOrder(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Creating the Orders....");
        // resolve();
        reject(new Error("Failed to create an order!"));
    }, 1000);
    });
    return promise;
};

function chargePayment(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Charging the Payment....");
        resolve();
    }, 2000);
    });
    return promise;
};

function sendInvoice(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Sending the Invoice....");
        resolve();
    }, 1000);
    });
    return promise;
};

function main(){
    checkInventory()
        .catch((err) => {
            console.log("err: ", err);
        })
        .then(createOrder)
        .catch((err) => {
            console.log("err: ", err)
        })
        .then(chargePayment)
        .then(sendInvoice)
        .catch((err) => {
            console.log("err: ", err);
        })

}

main();

// .then() -> handles the fulfilled result
// .catch() -> handles the error