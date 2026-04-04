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

// Filter method
// filter() creates a new array with elements that pass a condition.

const newArr = [5, 1, 3, 2, 6];

const result = newArr.filter((n) => n % 2 == 0);
console.log(result);

// Reduce
// reduce() reduces an array to a single value

const num = [5, 1, 3, 2, 6];

function findSum(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(num));