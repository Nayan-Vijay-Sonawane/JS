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