// Array Methods

let nums = [12, 42, 51, 24, 85, 98, 112];

let result = nums.filter( n => n%2===0)
    .map( n => n+2)
    .reduce((a, b) => a+b);

console.log(result);