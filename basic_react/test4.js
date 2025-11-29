// MAP method

/*
- Most used array method in react application.
- will use map method to displaying the list of data.

*/

const products = ["product1", "product2", "product3"];  

// map method returns new array will not change the previous array
const displayItems = products.map(function (product) {
    return "<li>" + product + "</li>";
});

// With arrow function

// const displayItems = products.map((product) => {
//     return "<li>" + product + "</li>";
// });

console.log(displayItems);