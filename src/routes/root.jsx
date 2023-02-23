import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from '../store/user/user.action.js';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navigation-bar/navigation-bar.component';

export default function Root() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<Fragment>
			<NavigationBar />
			<Outlet />
		</Fragment>
	);
}
