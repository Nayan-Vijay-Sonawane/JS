const obj = {
    name: "Nayan",
    age: 26,
    address: {
        city: "Mumbai",
        pin: 400001,
        locaion: {
            lat: 23.2,
            lng: 67.9
        },
    },
};

console.log(obj.name);
console.log(obj.age);

let { lat, lng } = obj.address.locaion;
console.log(lat + "\n" + lng);


let obj1 = {
    name: "Nayan",
    age: 26,
    email: "nayan@google.com"
}

for (let key in obj1){
    console.log(key + " : " + obj1[key]);
};


console.log(Object.keys(obj1));
console.log(Object.entries(obj1));

// Shallow Copy
let obj2 = {...obj1}

// Deep Copy
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.city = "Pune";
console.log(obj);
console.log(obj3);