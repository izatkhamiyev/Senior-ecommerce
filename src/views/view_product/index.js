import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { useParams, useHistory, Link } from 'react-router-dom';
import ImageLoader from 'components/ui/ImageLoader';
import ProductFeatured from 'components/product/ProductFeatured';
import CircularProgress from 'components/ui/ImageLoader';
import MessageDisplay from 'components/ui/MessageDisplay';
import TryOn from './tryon';
import { getBasket, removeFromBasket, addToBasket } from 'helpers/basketActions';

import { SHOP } from 'constants/routes';
import { displayMoney, displayActionMessage } from 'helpers/utils';
import ColorChooser from 'components/ui/ColorChooser';
import useRecommendedProducts from 'hooks/useRecommendedProducts';
import api from 'apis/api'

const ViewProduct = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const { id } = useParams();
    const history = useHistory();
    const store = {product: api.getProduct(id), basket: props.basket}

    // useDocumentTitle(`View ${store.product ? store.product.name : 'Item'}`);

    const [selectedImage, setSelectedImage] = useState(store.product ? store.product.image : '');
    const [product, setProduct] = useState(store.product || null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [show, setShow] = useState(false);
    const { recommendedProducts, fetchRecommendedProducts, isLoading, error } = useRecommendedProducts(6);
    const colorOverlay = useRef(null);
    const foundOnBasket = () => store.basket.find(item => item.id === product.id);

    // SIZES DROPDOWN ITEM
    var sizes = [];
    for (var i = 45; i <= 60; i++) {
        sizes.push(
            { value: i, label: `${i <= 48 ? 'Small' : i <= 55 ? 'Medium' : 'Large'} - ${i} mm` }
        );
    }

    const onAddToBasket = () => {
        if (foundOnBasket()) {
            removeFromBasket(product.id);
            displayActionMessage('Item removed from basket', 'info');
        } else {
            addToBasket({ ...product, selectedColor, selectedSize });
            displayActionMessage('Item added to basket', 'success');
        }
        props.setBasket(getBasket());
    };

    const onSelectedSizeChange = (newValue) => {
        setSelectedSize(newValue.value);
    };

    const onSelectedColorChange = (color) => {
        setSelectedColor(color);
        // colorOverlay.current.value = color;
    };

    const showModal = () => {
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

    return product ? (
        <div className="product-view">
            <Link to={SHOP}><h3><i className="fa fa-chevron-left" /> Back to shop</h3> </Link>
            <div className="product-modal">
                {product.imageCollection.length !== 0 && (
                    <div className="product-modal-image-collection">
                        {product.imageCollection.map(image => (
                            <div
                                className="product-modal-image-collection-wrapper"
                                key={image.id}
                                onClick={() => setSelectedImage(image.url)}
                            >
                                <ImageLoader
                                    className="product-modal-image-collection-img"
                                    src={image.url}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className="product-modal-image-wrapper">
                    {/* <input type="color" disabled ref={colorOverlay} id="color-overlay" /> */}
                    <ImageLoader
                        className="product-modal-image"
                        src={selectedImage}
                    />
                </div>
                <div className="product-modal-details">
                    <br />
                    <span className="text-subtle">{product.brand}</span>
                    <h1 className="margin-top-0">{product.name}</h1>
                    <span>{product.description}</span>
                    <br />
                    <br />
                    <div className="divider" />
                    <br />
                    <div>
                        <span className="text-subtle">Lens Width and Frame Size</span>
                        <br /><br />
                        <Select
                            placeholder="--Select Size--"
                            onChange={onSelectedSizeChange}
                            options={sizes}
                            styles={{ menu: provided => ({ ...provided, zIndex: 10 }) }}
                        />
                        
                    </div>
                    <br />
                    {product.availableColors.length >= 1 && (
                        <div>
                            <span className="text-subtle">Choose Color</span>
                            <br /><br />
                            <ColorChooser availableColors={product.availableColors} onSelectedColorChange={onSelectedColorChange} />
                            <br />
                        </div>
                    )}
                    <h1>{displayMoney(product.price)}</h1>
                    <div className="product-modal-action">
                        <button
                            className={`button button-small ${foundOnBasket() ? 'button-border button-border-gray' : ''}`}
                            onClick={onAddToBasket}
                        >
                            {foundOnBasket() ? 'Remove From Basket' : 'Add To Basket'}
                        </button>
                        <button style={{marginLeft:'5px'}} className='button button-small' onClick={e => {showModal(e)}}
                        >
                            Virtual Try-On
                        </button>
                        {selectedColor ? 
                        <TryOn show={show} closeModal={closeModal} modelName={product.model + '-' + selectedColor} selectedColor={selectedColor}/>
                         : 
                        <TryOn show={show} closeModal={closeModal} modelName={product.model} selectedColor={selectedColor}/>
                        }
                  
                        </div>
                </div>
            </div>
            <div style={{ marginTop: '10rem' }}>
                <div className="display-header">
                    <h1>Recommended</h1>
                </div>
                <div className="product-display-grid">
                    {error ? (
                        <MessageDisplay
                            message={error}
                            action={fetchRecommendedProducts}
                            buttonLabel="Try Again"
                        />
                    ) : (
                            <>
                                {recommendedProducts.length === 0 ? new Array(4).fill({}).map((product, index) => (
                                    <ProductFeatured
                                        key={`product-skeleton ${index}`}
                                        product={product}
                                    />
                                )) : recommendedProducts.map(product => (
                                    <ProductFeatured
                                        key={product.id}
                                        isLoading={isLoading}
                                        product={product}
                                    />
                                ))}
                            </>
                        )}
                </div>
            </div>
        </div>
    ) : (
            <div className="loader"><CircularProgress /></div>
        );
};

export default ViewProduct;
