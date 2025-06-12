import CartItem from './CartItem/CartItem';

import styles from './CartItemsList.module.css';

const CartItemsList = ({ items }) => {
	return (
		<ul className={styles.cartItems}>
			<li className={styles.cartItemsHeader}>
				<span>Name</span>
				<span>Quantity</span>
				<span>Price</span>
				<span>Total Price</span>
				<span></span>
			</li>

			{items.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default CartItemsList;
