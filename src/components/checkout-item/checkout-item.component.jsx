import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);

	const dispatch = useDispatch();

	const addCartItem = () => {
		dispatch(addItemToCart(cartItems, cartItem));
	};

	const removeCartItem = () => {
		dispatch(removeItemFromCart(cartItems, cartItem));
	};

	const clearCartItem = () => {
		dispatch(clearItemFromCart(cartItems, cartItem));
	};

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={removeCartItem}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addCartItem}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span onClick={clearCartItem} className="remove-button">
				&#10005;
			</span>
		</div>
	);
};

export default CheckoutItem;
