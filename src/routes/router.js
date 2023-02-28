import Root from './root';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../utils/stripe/stripe.utils';
import Home from './home/home.component';
import Shop from './shop/shop.component';
import Authentication from './authentication/authentication.component';
import Checkout from './checkout/checkout.component';
import CategoriesPreview from './categories-preview/categories-preview.component';
import Category from './category/category.component';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Elements stripe={stripePromise}>
						<Root />
					</Elements>
				</PersistGate>
			</Provider>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'shop',
				element: <Shop />,
				children: [
					{
						index: true,
						element: <CategoriesPreview />,
					},
					{
						path: ':category',
						element: <Category />,
					},
				],
			},
			{
				path: 'auth',
				element: <Authentication />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
		],
	},
]);
