// Objects

let employee = {
    name: "Nayan", 
    empID: "na222"
};

console.log(employee);


let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('draw');
    }
};


// Arguments  (special object)
// dynamic sort of function where we can give multiple no of parameters
// function sum(a, b){
function sum(){
    // console.log(arguments);
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
    // return a+b;
};

let ans = sum(1, 2, 4, 5, 6);
console.log(ans);

// Factory function

function createRectangle(){
    let rectangle = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log("Drawing reactangle")
        }
    };

    return rectangle;
}

console.log(createRectangle());


// String

console.log("Hello world! ");

let lastName = "Sonawane";

let firstName = new String("Nayan");

let message = 
`Hello ${lastName},

Thanks for the Opportunity

Regards,
Nayan`;

console.log(message);


// Rest operator
// It should be in the last parameter
function res(...args){
    console.log(args);
}

res(2, 3, 4, 5, 6, 7);