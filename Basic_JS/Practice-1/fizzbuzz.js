// FizzBuzz
// prints number from 1 to n but if divisible by 3 prints Fizz, if divisible by 5 prints Buzz and
// if divisible by both prints FizzBuzz otherwise prints the number.

function fizzbuzz(n){
    for(let i = 1; i < n; i++){
        if(i % 15 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

console.log(fizzbuzz(20));