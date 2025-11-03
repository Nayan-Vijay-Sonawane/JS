const name = "Nayan";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("NayanSonawane");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.indexOf('S'));

console.log(gameName.charAt(5));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);