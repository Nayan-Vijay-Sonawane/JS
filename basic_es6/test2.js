/* 
- Arrow fun is another way to define JavaScript functions.
- Can write JS functions in simple and easy way.
- Its useful when working on advanced topics

*/

function hello() {
    console.log("Hello New to JavaScript!");
}

const greet = () => {
    console.log("Hello New World of Javascript!");   
}

hello();
greet();

// normal function
function add(a, b){
    return a + b;
}
console.log(add(1, 3));

// Arrow function
const add1 = (a, b) => a + b;
console.log(add1(2, 3));