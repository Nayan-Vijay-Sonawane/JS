// primitive

// 7 types  : String, Number, Boolean, null, undefined , symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3456445645789456n;

// Reference type(Non-primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Krrish", "Doga"];

let myObj = {
    name: "Nayan",
    age: 24, 
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);