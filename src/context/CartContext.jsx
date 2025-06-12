import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
	items: [],
};

const getInitialState = () => {
	const localData = localStorage.getItem('cart');
	return localData ? JSON.parse(localData) : initialState;
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existing = state.items.find(item => item.id === action.payload.id);
			if (existing) {
				return {
					...state,
					items: state.items.map(item =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + action.payload.quantity }
							: item
					),
				};
			}
			return {
				...state,
				items: [...state.items, action.payload],
			};
		}

		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
			};

		case 'UPDATE_QUANTITY':
			const { id, quantity } = action.payload;

			if (quantity <= 0) {
				return {
					...state,
					items: state.items.filter(item => item.id !== id),
				};
			}

			return {
				...state,
				items: state.items.map(item =>
					item.id === id ? { ...item, quantity } : item
				),
			};

		case 'CLEAR_CART':
			return initialState;

		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		cartReducer,
		initialState,
		getInitialState
	);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state));
	}, [state]);

	const addItem = item => {
		dispatch({ type: 'ADD_ITEM', payload: item });
	};

	const removeItem = id => {
		dispatch({ type: 'REMOVE_ITEM', payload: id });
	};

	const updateQuantity = (id, quantity) => {
		dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const getTotalPrice = () => {
		return state.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const getTotalQuantity = () => {
		return state.items.reduce((total, item) => total + item.quantity, 0);
	};

	return (
		<CartContext.Provider
			value={{
				items: state.items,
				addItem,
				removeItem,
				updateQuantity,
				clearCart,
				getTotalPrice,
				getTotalQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
