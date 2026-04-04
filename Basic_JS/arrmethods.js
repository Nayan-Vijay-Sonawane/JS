// Array methods
// Map method
// map() creates a new array by applying a function to each element

const arr = [2, 3, 1, 4, 7, 9];

function double(x){
    return x * 2;
}
const output = arr.map(double);
const binary = arr.map((x) => x.toString(2));

console.log(output);
console.log(binary);