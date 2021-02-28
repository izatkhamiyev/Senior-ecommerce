import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import ImageLoader from '../ui/ImageLoader';
import { getBasket, removeFromBasket, addToBasket } from 'helpers/basketActions';
import { displayActionMessage} from 'helpers/utils';

const ProductItem = ({
	product,
	isItemOnBasket,
	isLoading,
	setBasket
}) => {
	const history = useHistory();

	const onClickItem = () => {
		if (isLoading) return;

		if (product.id) {
			history.push(`/product/${product.id}`);
		}
	};

	const displayMoney = (n) => {
		const format = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	
		// or use toLocaleString()
		return format.format(n);
	}
	const onAddToBasket = () => {
		if (isItemOnBasket) {
			removeFromBasket(product.id);
			displayActionMessage('Item removed from basket', 'info');
		} else {
			addToBasket(product);
			displayActionMessage('Item added to basket', 'success');
		}
		setBasket(getBasket())
	};

	return (
		<SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
			<div
				className={`product-card ${!product.id ? 'product-loading' : ''}`}
				style={{
					border: isItemOnBasket ? '1px solid #cacaca' : '',
					boxShadow: isItemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
				}}
			>
				{isItemOnBasket && <i className="fa fa-check product-card-check" />}
				<div
					className="product-card-content"
					onClick={onClickItem}
				>
					<div className="product-card-img-wrapper">
						{product.image ? (
							<ImageLoader
								className="product-card-img"
								src={product.image}
							/>
						) : <Skeleton width={'100%'} height={'90%'} />}
					</div>
					<div className="product-details">
						<h5 className="product-card-name text-overflow-ellipsis margin-auto">{product.name || <Skeleton width={80} />}</h5>
						<p className="product-card-brand">{product.brand || <Skeleton width={60} />}</p>
						<h4 className="product-card-price">{product.price ? displayMoney(product.price) : <Skeleton width={40} />}</h4>
					</div>
				</div>
				{product.id && (
					<button
						className={`product-card-button button-small button button-block ${isItemOnBasket ? 'button-border button-border-gray' : ''}`}
						onClick={onAddToBasket}
					>
						{isItemOnBasket ? 'Remove from basket' : 'Add to basket'}
					</button>
				)}

			</div>
		</SkeletonTheme>
	);
};

ProductItem.propType = {
	product: PropTypes.object.isRequired,
	isItemOnBasket: PropTypes.bool
};

export default ProductItem;