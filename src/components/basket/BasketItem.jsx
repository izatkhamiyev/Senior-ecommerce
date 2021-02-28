import React from 'react';
import PropTypes from 'prop-types';

import { getBasket, removeFromBasket } from 'helpers/basketActions';
import { displayMoney } from 'helpers/utils';
import BasketItemControl from './BasketItemControl';
import Badge from '../ui/Badge';
import ImageLoader from '../ui/ImageLoader';
import trash from 'images/trash.webp'

const BasketItem = ({product, setBasket }) => {
	const onRemoveFromBasket = () => {
		removeFromBasket(product.id);
		setBasket(getBasket())
	}
	return (
		<div className="basket-item">
			<BasketItemControl
				product={product}
				setBasket={setBasket}
			/>
			<div className="basket-item-wrapper">
				<div className="position-relative margin-right-m margin-left-s">
					<Badge count={product.quantity} />
				</div>
				<div className="basket-item-img-wrapper">
					<ImageLoader
						className="basket-item-img"
						src={product.image}
					/>
				</div>
				<div className="basket-item-details">
					<h5 className="basket-item-name">
						{product.selectedColor && <i className="fa fa-square" style={{ color: product.selectedColor }} />}
						&nbsp;
						{product.name}
					</h5>
					<h5 className="basket-item-price">
						{displayMoney(product.price * product.quantity)}
						<span>{` (x ${product.quantity})`}</span>
						&nbsp;
						{product.selectedSize && <span>| {product.selectedSize} mm</span>}
					</h5>
				</div>

				<button
					className="basket-item-remove button button-border button-border-gray button-small"
					onClick={onRemoveFromBasket}
				>
					<img src={trash} style={{width: 20, height:20}}/>
				</button>
			</div>
		</div>
	);
};

BasketItem.propType = {
	product: PropTypes.object.isRequired,
	basket: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BasketItem;
