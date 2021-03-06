
export const setBasket = (items) => {
    localStorage.setItem('basket', JSON.stringify(items));
}

export const getBasket = () => {
    var data = JSON.parse(localStorage.getItem('basket'));
    if (data === null){
        setBasket([]);
    }
    return JSON.parse(localStorage.getItem('basket'));
}

export const clearBasket = () => {
    localStorage.setItem('basket', JSON.stringify([]));
}

export const addToBasket = (product) => {
	var products = getBasket();
    product.quantity = 1;
    products.push(product);
    setBasket(products);
};

export const removeFromBasket = (id) => {
    var products = getBasket();
    products = products.filter(val => val.id !== id)
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