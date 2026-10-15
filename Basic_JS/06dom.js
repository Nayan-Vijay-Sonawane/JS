function getAvailableProductNames(products){
    return products
        .filter(product => product.available === true)
        .map(product => product.name);
};

