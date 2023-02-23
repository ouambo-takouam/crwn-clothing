import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTIONS_TYPES } from './cart.types';

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean);

export const setCartItems = (cartItems) =>
	createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd) =>
	setCartItems(addCartItem(cartItems, productToAdd));

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
	setCartItems(removeCartItem(cartItems, cartItemToRemove));

export const clearItemFromCart = (cartItems, cartItemToClear) =>
	setCartItems(cleartCartItem(cartItems, cartItemToClear));

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	if (cartItemToRemove.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const cleartCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
