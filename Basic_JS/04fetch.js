// Fetch API
// The fetch API provides an interface for fetching the resources. It is more powerful and flexible replacement for
// XMLHttpRequest


// scenario
// prepare url / api endpoint
// await // fetch data -> network call -> async
// process data -> sync

async function getData() {
    // get request -> async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // parse json -> async
    let data = await response.json();

    console.log(data);
}

getData();
