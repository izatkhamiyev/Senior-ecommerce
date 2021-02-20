import { useState, useEffect } from 'react';
import api from 'apis/api'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, []);

    const fetchProducts = () => {
        try {
            setLoading(true);
            setError('');

            const docs = api.getProducts();

            if (docs.empty) {
                setError('No recommended products found.');
            } else {
                const items = [];

                docs.forEach((snap) => {
                    items.push({ id: snap.id, ...snap });
                });

                setProducts(items);
                setLoading(false);
            }
        } catch (e) {
            setError('Failed to fetch recommended products');
            setLoading(false);
        }
    };

    return { products, fetchProducts, isLoading, error };
};

export default useProducts;
