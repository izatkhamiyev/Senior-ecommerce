import { useState, useEffect } from 'react';
import api from 'apis/api'

const useRecommendedProducts = (itemsCount) => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (recommendedProducts.length === 0) {
            fetchRecommendedProducts();
        }
    }, []);

    const fetchRecommendedProducts = () => {
        try {
            setLoading(true);
            setError('');

            const docs = api.getRecommendedProducts(itemsCount);

            if (docs.empty) {
                setError('No recommended products found.');
            } else {
                const items = [];

                docs.forEach((snap) => {
                    items.push({ id: snap.id, ...snap });
                });

                setRecommendedProducts(items);
                setLoading(false);
            }
        } catch (e) {
            setError('Failed to fetch recommended products');
            setLoading(false);
        }
    };

    return { recommendedProducts, fetchRecommendedProducts, isLoading, error };
};

export default useRecommendedProducts;
