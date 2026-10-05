const component = {
    name: "Product",
    price: 100
};


const products = [
    {name: "Phone", price: 500},
    {name: "Laptop", price: 1200}
];

const expensiveProducts = products.filter(product =>{ return product.price > 500});

console.log(expensiveProducts);


