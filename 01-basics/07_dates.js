let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025, 0, 26);
// let myCreatedDate = new Date(2025, 0, 26, 5, 6);
let myCreatedDate = new Date("2025-01-26");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());