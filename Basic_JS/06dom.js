function getAvailableProductNames(products){
    return products
        .filter(product => product.available === true)
        .map(product => product.name);
};

const products = [
    {name:"Phone", available:true},
    {name:"Laptop", available:false},
    {name:"Mouse", available:true}
];

console.log(getAvailableProductNames(products));
