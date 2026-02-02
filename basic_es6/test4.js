// MAP method

/*
- Map is just collection of key-value pair
- Most used array method in react application.
- will use map method to displaying the list of data.


*/

const products = ["product1", "product2", "product3"];  

// map method returns new array, does not changes the previous array
// const displayItems = products.map(function (product) {
//     return "<li>" + product + "</li>";
// });

// With arrow function

const displayItems = products.map((product) => 
    `<li> ${product} </li>`
);

console.log(displayItems);

// new information about map
 
let map = new Map();

map.set("Nayan", "Java");
map.set("Swaraj", "Andriod");
map.set("Pranav", "ML");
map.set("Nayan", "Blockchain");

console.log(map.keys());    // fetch all the keys 
console.log(map.has("Nayan"));  // checks If the key is available in this map
console.log(map.get("Swaraj")); // gives particular element of the key

// To print entire map we can use key-value with forOff or forEach loop

for(let [key, value] of map){
    console.log(key, ":", value);
}

// forEach
// Here as in the forEach loop the sequence is value then index no
// so pass first value then index value
map.forEach((value, key) => {
    console.log(key, ":", value);
})


// Objects VS Map
/*
In Objects properties they are key-value pairs, when we work with a normal entities for eg, remote - 
the properties are color, size, brand, controls. But when we have the collection of values like brands
and versions in that case we can use map.
We can also use objects here but it becomes easy when we use map here

*/