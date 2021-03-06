import React, { useState, useEffect, useRef } from 'react';
import ProductItem from 'components/product/ProductItem';

import useProducts from 'hooks/useProducts';


const Shop = (props) => {

    const [columnCount, setColumnCount] = useState(6);
    const productListWrapper = useRef(null);
    const foundOnBasket = (product) => props.basket.find(item => item.id === product.id);

    const {
		products,
		fetchProducts,
		isLoading,
		error,
    } = useProducts();

    const onProductsLengthChanged = () => {
        const width = window.screen.width - 250; // minus 250px padding
        const pLen = products.length;

        setColumnCount(Math.floor(width / 160));
        if ((columnCount >= pLen) && pLen !== 0) {
            setColumnCount(pLen);
        }
    };

    useEffect(() => {
        if (productListWrapper) {
            onProductsLengthChanged();
        }
    }, [products]);

    return (
        <>
            <section className="product-list-wrapper">
                <>
                    <div
                        className="product-list"
                        ref={productListWrapper}
                        style={{ gridTemplateColumns: `repeat(${columnCount}, 160px)` }}
                    >
                        {
                            products.map(product => (
                                <ProductItem
                                    isItemOnBasket={foundOnBasket(product)}
                                    key={product.id}
                                    isLoading={false}
                                    product={product}
                                    setBasket={props.setBasket}
                                />
                            ))
                        }
                    </div>
                </>
            </section>
        </>
    );
};

export default Shop;