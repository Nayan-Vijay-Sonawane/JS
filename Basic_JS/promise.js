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
    const promise = new Promise(() => {
        setTimeout(() => {
        console.log("Checking the Inventory....");
    }, 2000);
    });
    return;
};

function createOrder(){
    setTimeout(() => {
        console.log("Creating the Orders....");
    }, 1000);
};

function chargePayment(){
    setTimeout(() => {
        console.log("Charging the Payment....");
    }, 2000);
};

function sendInvoice(){
    setTimeout(() => {
        console.log("Sending the Invoice....");
    }, 1000);
};

function main(){
    checkInventory();

}

main();