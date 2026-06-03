// Closure
// A closure is when a function remembers variables from the outer scope even after that outer 
// function has finished executing.

function outerFunction(){
    let username = "Nayan";     // let -> block scope
    function innerFunction(){
        // innerFunction() is the inner function that forms closure
        let password = "nayan1234";
        console.log(`${username} has password ${password}`);    // used variable present in the
        // parent function
    };
    return innerFunction();

}
outerFunction();
