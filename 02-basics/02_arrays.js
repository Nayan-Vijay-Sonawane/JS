const marvel_heros = ["Ironman", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Spread operators
const newAllHeros = [...marvel_heros, ...dc_heros];
console.log(newAllHeros);