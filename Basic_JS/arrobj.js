// Array
// An Unordered list of value

const names = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE", "EXPRESS"];
console.log(names);

// Objects
// A collection of data and functionality which is stored as key value pair
const emp = {
    name: "Nayan",
    age: 25,
    email: "nayan@google.com",
    empID: 1234,
    loaction: "Mumbai"
}

console.log(emp);

// Find maximum in array
function findMax(arr){
    let max = arr[0];

    for(let i=0; i <= arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 2, 5, 6, 8, 3, 9, 1]));