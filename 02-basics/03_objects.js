// Singleton

// Object literals

const mySym = Symbol("Key1");

//Object.create // constructor method in which singleton is created
const JsUser = {
    name: "Nayan",
    age: 18,
    [mySym]: "MyKey1",
    email: "nayansonawane@google.com",
    location: "Mumbai",
    isLoggedIn : false, 
    lastLoginDays: ["Monday", "Wednesday"]
}

console.log(JsUser.email);
console.log(JsUser["location"]);

console.log(typeof(JsUser[mySym]));     // If we have to refer to the symbol, so we have to put it in the square brackets

JsUser.email = "nayansonawane@chatgpt.com";
console.log(JsUser["email"]);

Object.freeze(JsUser);
JsUser.email = "nayansonawane@mircosoft.com";
console.log(JsUser);
