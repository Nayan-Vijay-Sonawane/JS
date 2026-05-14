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