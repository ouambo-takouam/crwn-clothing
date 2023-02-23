import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './navigation-bar.styles.scss';

const NavigationBar = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const signOut = () => {
		dispatch(signOutStart());
	};

	return (
		<div className="navigation">
			<Link className="logo-container" to="/">
				<CrwnLogo className="logo" />
			</Link>
			<div className="nav-links-container">
				<Link className="nav-link" to="/shop">
					SHOP
				</Link>
				{currentUser ? (
					<span className="nav-link" onClick={signOut}>
						SIGN OUT
					</span>
				) : (
					<Link className="nav-link" to="/auth">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{isCartOpen && <CartDropdown />}
		</div>
	);
};

export default NavigationBar;
