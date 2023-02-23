import { useSelector, useDispatch } from 'react-redux';
import {
	selectIsCartOpen,
	selectCartCount,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const dispatch = useDispatch();

	const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<div onClick={toogleIsCartOpen} className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
