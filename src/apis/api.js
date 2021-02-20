import data from './db.json';

class Api {

    constructor(){

    }

    getFeaturedProducts = (itemsCount = 12) => {
        var products = data['products'];
        products = products.filter(item => item["featured"] === true);
        return products.slice(0, itemsCount);
    }

    getRecommendedProducts = (itemsCount = 12) => {
        var products = data['products'];
        products = products.filter(item => item["recommended"] === true);
        return products.slice(0, itemsCount);
    }

    getProduct = (id) => {
        var products = data['products'];
        products = products.filter(item => item['id'] == id);
        if(products.length > 0)
            return products[0];
        else
            return 0;
    }

    getProducts = () => {
        var products = data['products'];
        return products;
    }
}

const api = new Api()

export default api;