// Promises
// A promise is an object represents the eventual completion of an asynchronous operation and its resulting value.
// promise has three states
// Pending   -> Initial state neither fulfilled nor rejected
// Fulfilled -> The operation completed successfully
// Rejected  -> The operation is failed

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