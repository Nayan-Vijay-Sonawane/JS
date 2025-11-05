const arr = [2, 3, 4, 5, 6];
console.log(arr);

const myHeros = ["Ironman", "Hulk", "Thor"];

const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2[2]);

// Array Methods

// arr.push(7);
// arr.pop();

arr.unshift(9);
arr.shift(1);
console.log(arr);

const newArr = arr.join();
console.log(arr);
console.log(newArr);

// slice and splice

console.log("A", arr);
const myn1 = arr.slice(1, 3);

console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3);
console.log("C", arr);
console.log(myn2);