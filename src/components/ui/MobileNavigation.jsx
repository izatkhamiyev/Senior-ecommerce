import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HOME, SIGNIN } from 'constants/routes';
import Badge from './Badge';

const Navigation = (props) => {
	return (
		<nav className="mobile-navigation">
			<div className="mobile-navigation-main">
				<div className="mobile-navigation-logo">
					<Link to={HOME}>
						<h2>SALINAKA</h2>
					</Link>
				</div>
                <Badge>
                    <i className="fa fa-shopping-bag" style={{ fontSize: '2rem' }} />
                </Badge>
			</div>
		</nav>
	);
}

export default Navigation;
