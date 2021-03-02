import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HOME, SIGNIN } from 'constants/routes';
import Badge from './Badge';
import basket from 'images/basket.webp';
import BasketToggle from '../basket/BasketToggle';

const Navigation = (props) => {
	return (
		<nav className="mobile-navigation">
			<div className="mobile-navigation-main">
				<div className="mobile-navigation-logo">
					<Link to={HOME}>
						<h2>EYESTORE</h2>
					</Link>
				</div>
				<BasketToggle>
					{({ onClickToggle }) => (
						<button
							className="button-link navigation-menu-link basket-toggle"
							onClick={onClickToggle}
						>
						<Badge count={props.basket.length}>
							<img src={basket} style={{width: 20, height: 20}}/>
						</Badge>
						</button>
					)}
				</BasketToggle>
			</div>
		</nav>
	);
}

export default Navigation;
