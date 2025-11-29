/*
- Filter method is used to filter array.
- filter is used to remove items from existing array.
- it always return a new array.
*/

const ages = [5, 23, 14, 30, 21];

console.log(ages);

const adults = ages.filter((age) => age > 18);
// const adults = ages.filter((age) => age !== 30);

console.log(adults);