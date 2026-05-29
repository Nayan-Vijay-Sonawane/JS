// Callback
// A function that is passed as an argument to another function and executed later
// callback function can execute after another function has finished

// callback function
{/*

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");
    
*/}

// Callback Hell
// when callbacks are nested deeply, the code becomes unreadable and hard to maintain

function checkInventory(callback){
    setTimeout(() => {
        console.log("Checking the Inventory...");
        callback();
    }, 2000);
}

function createOrder(callback){
    setTimeout(() => {
        console.log("Creating the Order...");
        callback();
    }, 1000);
}

function chargePayment(callback){
    setTimeout(() => {
        console.log("Charging the Payment...");
        callback();
    }, 2000);
}

function sendInvoice(){
    setTimeout(() => {
        console.log("Sending the Invoice...");
    }, 1000);
}

function main(){
    checkInventory(() => {
        createOrder(() => {
            chargePayment(() => {
                sendInvoice();
            });
        });
    });
}

main();