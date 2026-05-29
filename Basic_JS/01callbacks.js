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
        const error = new Error("Order creation is failed");
        callback(error);
    }, 1000);
}

function chargePayment(callback){
    setTimeout(() => {
        console.log("Charging the Payment...");
        const error = null;
        const chargeAmount = 100;
        callback(error, chargeAmount);
    }, 2000);
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log("Sending the Invoice...");
        callback();
    }, 1000);
}

function main(){
    checkInventory(() => {
        createOrder((error) => {
            if(error){
                console.log(error);
            }
            chargePayment((error, chargeAmount) => {
                if(error){
                    console.log("Handling the error!");
                    return;
                }
                console.log("Charged: ", chargeAmount);
                sendInvoice(() => {
                console.log("All requests are processed successfully!");                    
                });
            });
        });
    });
}

main();