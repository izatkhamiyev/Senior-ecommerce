/* eslint-disable indent */
import * as ROUTE from 'constants/routes';
import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from 'static/logo-tmp.png';

import Badge from './Badge'
import MobileNavigation from './MobileNavigation';



const Navigation = () => {
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
                    <Badge count={0}>
                        <i className="fa fa-shopping-bag" style={{ fontSize: '2rem' }} />
                    </Badge>
					</li>			
				</ul>
			</nav>
		);
};

export default Navigation;
