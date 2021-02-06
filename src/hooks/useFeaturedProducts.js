import { useState, useEffect } from 'react';
import api from 'apis/api';

const useFeaturedProducts = (itemsCount) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (featuredProducts.length === 0) {
            fetchFeaturedProducts();
        }
    }, []);

    const fetchFeaturedProducts = () => {
        try {
            setLoading(true);
            setError('');

            const docs = api.getFeaturedProducts(itemsCount);
            if (docs.empty) {
                setError('No featured products found.');
            } else {
                const items = [];
                docs.forEach((snap) => {
                    items.push({ id: snap.id, ...snap });
                });

                setFeaturedProducts(items);
                setLoading(false);
            }
        } catch (e) {
            setError('Failed to fetch featured products');
            setLoading(false);
        }
    };

    return { featuredProducts, fetchFeaturedProducts, isLoading, error };
};

export default useFeaturedProducts;
