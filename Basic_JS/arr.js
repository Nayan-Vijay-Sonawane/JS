// Arrays

let selectedColors = ['red', 'blue'];
console.log(selectedColors[1]);


let brr = new Array('Greet', 1, true);
brr.push('Nayan');      // insert at end
brr.pop();          // remove last item

brr.shift();        // remove the fist item
brr.unshift('Nayan Sonawane');      // add first item
brr.push(20);
brr.push(40);
brr.push(70);

console.log(brr.slice(2, 4));       // new part
brr.splice(1, 2, 'kunal')            // adds or removes element from an specific index

console.log(brr.indexOf(4, 70));
console.log(brr);

// map() creates a new array by applying a function to each element
const arr = [10, 20, 30];
const ansArray = arr.map((num) => {
    return num*num;
})
console.log(ansArray);

// filter() creates a new array with elements that pass a condition.

const eve = [10, 20, 30, 11, 21, 44, 51,'Nayan', 'New']
const evenArray = eve.filter((num) => {
    return typeof(num) === 'string';
    // return num%2===0;
    // if(num%2===0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
});

console.log(evenArray);

// reduce() reduces an array to a single value

const newA = [10, 20, 30, 40];

const ans = newA.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(ans);



// Emptying an array

let numbers = [1, 2, 3, 4, 5, 6];
let numbers2 = numbers;

// 1. 
// numbers = [];   // here the reference is same so numbers is assigned to numbers2 so it will give the output
                // of the array because the array is not empty just changed the reference

// 2. 
// numbers.length = 0; // here we changed the length 

// 3.
numbers.splice(0, numbers.length);  // here also we changed the length from zeroth index

console.log(numbers);
console.log(numbers2);



// Joining the array
let numbers3 = [1, 2, 3, 4, 5, 6];

const joined = numbers3.join(',');
console.log(joined);

// split the sentence
let name = "This is my first message";
let parts = name.split(' ');

console.log(parts);

// Filtering method

let newnum = [1, 2, 3, -1, -2, -3];

let filtered = newnum.filter(value => {return value >=0});
console.log(filtered);