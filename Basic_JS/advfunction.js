// Callback Function
// It is passed as an argument to another function and is executed later.

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Nayan", sayBye);