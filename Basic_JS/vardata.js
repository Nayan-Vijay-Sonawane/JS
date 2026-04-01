// Variables Data types

const name = "Nayan";
let age = 25;
let isLoggedIn = false;

console.log(name);
console.log(age);
console.log(isLoggedIn);

// Print type using typeof

// Type conversion(Explicit) and type coercison(Implicit)
console.log("Explicit Conversion");
let a = 5;
let b = String(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));

console.log("Implicit Conversion");
let n = 1;
let s = "45";
let res = n + s;    // converts num to string
console.log(res);
console.log(typeof(res));


// Create Object for a User

const emp = {
    name: "Nayan",
    age: 25,
    EmpID: 1234,
    email: "nayan@google.com",
    location: "Mumbai"
}

console.log(emp);