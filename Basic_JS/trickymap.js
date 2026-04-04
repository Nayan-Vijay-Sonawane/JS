// Find the list with full names
//["Nayan Sonawane", "Donald Trump", ...]

const users = [
    { firstName: "Nayan", lastName: "Sonawane", age: 25},
    { firstName: "Donald", lastName: "Trump", age: 75},
    { firstName: "Elon", lastName: "Musk", age: 52},
    { firstName: "Jeff", lastName: "Bezos", age: 70},
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);