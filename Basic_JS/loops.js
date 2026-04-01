// Loops
// for, while, for...of, forEach

// print 1-100
// for loop
for(i=1; i<=100; i++){
    console.log(i);
}

// while loop
let j=1;
while(j<=100){
    console.log(j);
    j++;
}

// Sum of numbers

const numbers = [22, 34, 56, 71, 89, 97];
let sum = 0;

for(const num of numbers){
    sum  = sum + num;
}
console.log(numbers);

console.log(`The sum of these numbers are ` + sum);