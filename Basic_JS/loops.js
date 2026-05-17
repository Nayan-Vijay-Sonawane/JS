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

// do-while loop
// if the condition is true or not still the loop executes one time
let y = 1;
do{
    console.log(y);
    y++;
}
while(y<10);


// for-of loop
let arr = [10, 20, 30, 40, 50];

for(let value of arr){
    console.log(value);
};


// for-each loop
let arr2 = [10, 20, 30, 40, 50];

arr2.forEach(function(number){
    console.log(number);
})

arr2.forEach(number => console.log(number));