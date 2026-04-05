// Asynchronous Javascript

function checkInventory(){
    setTimeout(() => {
        console.log("Checking the Inventory...");
    }, 2000)
}

function createOrder(){
    setTimeout(() => {
        console.log("Checking the Order...");
    }, 1000)
}

function chargePayment(){
    setTimeout(() => {
        console.log("Charging the Payment...");
    }, 2000)
}

function sendInvoice(){
    setTimeout(() => {
        console.log("Sending the Invoice...");
    }, 1000);
}

function main(){
    checkInventory();
    createOrder();
    chargePayment();
    sendInvoice();
}

main();