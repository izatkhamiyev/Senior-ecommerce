/* eslint-disable indent */
import * as ROUTE from 'constants/routes';
import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from 'images/logo.png';
import basket from 'images/basket.webp';
import Badge from './Badge'
import MobileNavigation from './MobileNavigation';
import BasketToggle from '../basket/BasketToggle';

const Navigation = (props) => {
	const navbar = useRef(null);
	const history = useHistory();
	const { pathname } = useLocation();
	const scrollHandler = () => {
		if (navbar.current && window.screen.width > 480) {
			if (window.pageYOffset >= 70) {
				navbar.current.classList.add('is-nav-scrolled');
			} else {
				navbar.current.classList.remove('is-nav-scrolled');
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

    return window.screen.width <= 800 ? (
		<MobileNavigation
			pathname={pathname}
		/>
        ) : (
			<nav
				className="navigation"
				ref={navbar}
			>
				<div className="logo">
					<Link to="/">
						<img src={logo} />
					</Link>
				</div>
				<ul className="navigation-menu-main">
					<li>
						<Link to={ROUTE.HOME}>HOME</Link>
					</li>
					<li>
						<Link to={ROUTE.SHOP}>SHOP</Link>
					</li>
				</ul>
	
				<ul className="navigation-menu">
					<li className="navigation-menu-item">
					<BasketToggle>
							{({ onClickToggle }) => (
								<button
									className="button-link navigation-menu-link basket-toggle"
									onClick={onClickToggle}
								>
								<Badge count={props.basket.length}>
									<img src={basket} style={{width: 40, height:40}}/>
								</Badge>
								</button>
							)}
						</BasketToggle>
					</li>			
				</ul>
			</nav>
		);
};

export default Navigation;
