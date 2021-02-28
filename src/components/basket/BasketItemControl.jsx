import React from 'react';
import PropTypes from 'prop-types';
import { addQtyItem, getBasket, minusQtyItem } from 'helpers/basketActions';

const BasketItemControl = ({ product, setBasket }) => {
	const onAddQty = () => {
		addQtyItem(product.id);
		setBasket(getBasket());
	};

	const onMinusQty = () => {
		if (product.quantity !== 0) {
			minusQtyItem(product.id);
			setBasket(getBasket());
		}
	};

	return (
		<div className="basket-item-control">
			<button
				className="button button-border button-border-gray button-small basket-control basket-control-add"
				onClick={onAddQty}
			>
				+
			</button>
			<button
				className="button button-border button-border-gray button-small basket-control basket-control-minus"
				disabled={product.quantity === 1}
				onClick={onMinusQty}
			>
				-
			</button>
		</div>
	);
};

BasketItemControl.propType = {
	action: PropTypes.objectOf(PropTypes.func).isRequired,
	product: PropTypes.object.isRequired
};

export default BasketItemControl;
