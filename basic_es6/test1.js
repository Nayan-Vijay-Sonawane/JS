// Function Scope and Block Scope (let, const)

function printloop() {
    // Function scope
    for(var i=0; i<3; i++){
        console.log(i);
    }
    console.log("OUTSIDE", i);

    // Block scope
    for(let j=0; j<5; j++){
        console.log(j);
    }

    // console.log("OUT", j);   // j is not defined
}

printloop();