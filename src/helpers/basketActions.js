
export const setBasket = (items) => {
    localStorage.setItem('basket', JSON.stringify(items));
}

export const getBasket = () => {
    return JSON.parse(localStorage.getItem('basket'));
}

export const clearBasket = () => {
    localStorage.setItem('basket', JSON.stringify([]));
}

export const addToBasket = (product) => {
    console.log(product);
	var products = getBasket();
    product.quantity = 1;
    products.push(product);
    setBasket(products);
};

export const removeFromBasket = (id) => {
    var products = getBasket();
    console.log(products);
    products = products.filter(val => val.id !== id)
    console.log(products)
    setBasket(products);
    return getBasket()
}

export const addQtyItem = (id) => {
    var products = getBasket();
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id)
            products[i].quantity += 1;
    }
    setBasket(products);
}


export const minusQtyItem = (id) => {
    var products = getBasket();
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id)
            products[i].quantity -= 1;
    }
    setBasket(products);
}