function renderProduct(product){
    const {name, price, available} = product;

    if(available){
        console.log(`${name} costs ${price}`);
        
    }
}