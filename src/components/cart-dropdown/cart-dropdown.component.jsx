import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectIsCartOpen,
	selectCartItems,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartItems = useSelector(selectCartItems);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		dispatch(setIsCartOpen(!isCartOpen));
		navigate('/checkout');
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
