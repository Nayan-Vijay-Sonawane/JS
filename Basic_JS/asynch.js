// Asynchronous Javascript

function checkInventory(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Checking the Inventory...");
        // resolve();
        reject(new Error("Failed to check inventory!"))
    }, 2000);
    })
    return promise;
}

function createOrder(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Creating the Order...");
        resolve();
        // reject(new Error("Failed to create an order"));
        }, 1000);
    })
    return promise;
}

function chargePayment(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Charging the Payment...");
        resolve();
    }, 2000)
    })
    return promise;
}

function sendInvoice(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Sending the Invoice...");
        resolve();
    }, 1000);
    })
    return promise;
}

async function main(){
    // // Here these are async calls 
    // checkInventory();
    // createOrder();
    // chargePayment();
    // sendInvoice();
    // // Here the console prints first because the async calls didn't blocks the thread 
    // console.log("Other requests processing...");

    // Here the callbacks comes into picture to fix the order
    // But this is callback hell
    // checkInventory(() => {
    //     createOrder((error) => {
    //         if(error){
    //             console.log(error);
    //         }
    //         chargePayment((err, chargedAmount) => {
    //             if(err){
    //                 console.log("Handling the error!");
    //                 return;
    //             }
    //             console.log("charged:", chargedAmount);
    //             sendInvoice(() => {
    //                 console.log("All done!");
    //             })
    //         })
    //     });
    // })

    // Promises
    // checkInventory()
    //     .catch((err) => {
    //         console.log("err", err);
    //     })
    //     .then(createOrder)
    //     .catch((err) => {
    //         console.log("err", err);
    //     })
    //     .then(chargePayment)
    //     .then(sendInvoice)
        

    // async/await
    try{
        await checkInventory();
    }
    catch(err){
        console.log("Error", err);
    }
    try{
        await createOrder();
    }
    catch(err){
        console.log("Error", err);
    }
        await chargePayment();
        await sendInvoice();
    

    console.log("Other requests processing...");
}


main();


