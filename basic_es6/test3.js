// Objects

const user = {
    name: "Harley",
    email: "harley@google.com",
    age: 24
}


// Accessing Objects
console.log(user.name);
console.log(user["email"]);


const newUSer = {
    name: "Sam",
    email: "sam@yahoo.com",
    age: 35,
    country: "US"
}

// if we have multiple properties then we have to declare multiple properties
// const name = newUSer["name"];
// const email = newUSer["email"];
// const age = newUSer["age"];
// const country = newUSer["country"];


// To solve that issue we have Object destructuring
const {name: userName, email, age, country} = newUSer;    // to change name of variable 


console.log(userName, email, age, country);