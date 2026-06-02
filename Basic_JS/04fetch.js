// Fetch API
// The fetch API provides an interface for fetching the resources. It is more powerful and flexible replacement for
// XMLHttpRequest


// scenario
// prepare url / api endpoint
// await // fetch data -> network call -> async
// process data -> sync

async function getData(){

    // get request -> async
    let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
};

getData();

