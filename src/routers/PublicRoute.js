import React, {useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from 'components/ui/Footer';
import Navigation from 'components/ui/Navigation';
import Basket from 'components/basket/Basket';
import { getBasket, setBasket, clearBasket } from 'helpers/basketActions';



const PublicRoute = ({component: Component, ...rest}) => {
	const [basket, setBasketHook] = useState(getBasket, []);

	return <Route {...rest} basket={basket} setBasket={setBasketHook} component={(props) => {
		return (			
                <>
                    <Navigation basket={basket} setBasket={setBasketHook}/>
					<Basket basket={basket} setBasket={setBasketHook} />
                    <main className="content">
                        <Component {...props} basket={basket} setBasket={setBasketHook}/>
                    </main>
                    <Footer />
                </>
			);
		}}
	/>
};


export default PublicRoute;