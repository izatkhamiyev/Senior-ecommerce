import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from 'components/ui/Footer';
import Navigation from 'components/ui/Navigation';

const PublicRoute = ({
	component: Component,
	...rest
}) => (
	<Route
		{...rest}
		component={(props) => {
			return (			
                <>
                    <Navigation />
                    <main className="content">
                        <Component {...props} />
                    </main>
                    <Footer />
                </>
			);
		}}
	/>
);


export default PublicRoute;