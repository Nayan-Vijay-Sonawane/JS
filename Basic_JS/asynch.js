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
        const error = new Error("Order creation failed.");
        callback(error);
        }, 1000);
}

function chargePayment(callback){
    setTimeout(() => {
        console.log("Charging the Payment...");
        let error = null;
        let chargedAmount = 100;
        callback(error, chargedAmount);
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

    // Here the callbacks comes into picture to fix the order
    // But this is callback hell
    checkInventory(() => {
        createOrder((error) => {
            if(error){
                console.log(error);
            }
            chargePayment((err, chargedAmount) => {
                if(err){
                    console.log("Handling the error!");
                    return;
                }
                console.log("charged:", chargedAmount);
                sendInvoice(() => {
                    console.log("All done!");
                })
            })
        });
    })

    console.log("Other requests processing...");
}


main();


