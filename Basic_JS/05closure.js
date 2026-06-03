// Closure
// A closure is when a function remembers variables from the outer scope even after that outer 
// function has finished executing.

function outerFunction(){
    let username = "Nayan";
    function innerFunction(){
        let password = "nayan1234";
        console.log(`${username} has password ${password}`);
    };
    return innerFunction();

}
outerFunction();
