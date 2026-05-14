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