arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

arr.pop();
arr.push(8); 
arr.shift();
arr.unshift(1);
let newArr = arr.slice(1, 3);
arr.splice(4, 7);
console.log(newArr);
console.log(arr);