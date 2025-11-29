// spread operator

const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];

// arr1.push(5, 6);
// const numbers = arr1.concat(arr3, arr2);
const numbers = [...arr1, ...arr3, ...arr2];
console.log(numbers);
