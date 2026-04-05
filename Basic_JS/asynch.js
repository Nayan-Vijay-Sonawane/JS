// Asynchronous Javascript

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
    }, 2000)
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log("Sending the Invoice...");
        callback();
    }, 1000);
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


