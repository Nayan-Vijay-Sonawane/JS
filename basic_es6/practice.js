// Map

const names = ["Nayan", "Durgesh", "Omkar", "Sarthak", "Rushikesh"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

// Counter 

let count = 0;

const increment = () => {
    count++;
    console.log(count);
}

increment();
increment();
increment();
