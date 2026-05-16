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