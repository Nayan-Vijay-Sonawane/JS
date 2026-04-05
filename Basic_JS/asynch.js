// Asynchronous Javascript

function checkInventory(callback){
    setTimeout(() => {
        console.log("Checking the Inventory...");
    }, 2000)
    callback();
}

function createOrder(callback){
    setTimeout(() => {
        console.log("Creating the Order...");
    }, 1000)
    callback();
}

function chargePayment(callback){
    setTimeout(() => {
        console.log("Charging the Payment...");
    }, 2000)
    callback();
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log("Sending the Invoice...");
    }, 1000);
    callback();
}

function main(){
    // // Here these are async calls 
    // checkInventory();
    // createOrder();
    // chargePayment();
    // sendInvoice();
    // // Here the console prints first because the async calls didn't blocks the thread 
    // console.log("Other requests processing...");

    // Here the callbacks comes into picture for the order
    checkInventory(() => {
        createOrder(() => {
            chargePayment(() => {
                sendInvoice(() => {
                    console.log("All done!");
                })
            })
        });
    })

    console.log("Other requests processing...");
}


main();


