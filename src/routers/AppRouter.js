import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import * as ROUTES from 'constants/routes';

import PublicRoute from 'routers/PublicRoute';
import Home from 'views/home';
import Shop from 'views/shop';

export var history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<PublicRoute
				component={Home}
				exact
				path={ROUTES.HOME}
			/>
			<PublicRoute
				component={Shop}
				exact
				path={ROUTES.SHOP}
			/>
			{/* <PublicRoute
				component={ViewProduct}
				path={ROUTES.VIEW_PRODUCT}
			/>
			<PublicRoute component={PageNotFound} /> */}
		</Switch>
	</Router>
);

export default AppRouter;
