import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-col-1">
				<strong><span>Developed by <a href="https://github.com/izatkhamiyev/Senior-ecommerce">Izat and Nurtas</a></span></strong>
			</div>
			<div className="footer-col-2">
				{/* <img className="footer-logo" src={logo} /> */}
				<h5>&copy;&nbsp;{new Date().getFullYear()}</h5>
			</div>
			<div className="footer-col-3">
				<strong>
					<span>
						Fork this project &nbsp;
            			<Link to='/'>HERE</Link>
					</span>
				</strong>
			</div>
		</footer>
	);
};

export default Footer;
