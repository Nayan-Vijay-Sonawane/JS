const marvel_heros = ["Ironman", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Spread operators
// const newAllHeros = [...marvel_heros, ...dc_heros];
// console.log(newAllHeros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);

console.log(Array.isArray("Nayan"));
console.log(Array.from("Nayan"));
console.log(Array.from({name: "Nayan"})); // have to declare from which we have to create the array like from the key or from the value.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));