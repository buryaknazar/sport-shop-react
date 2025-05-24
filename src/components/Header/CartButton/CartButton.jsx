import styles from './CartButton.module.css';

import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
	return (
		<button className={styles.cartButton} aria-label='Cart'>
			<ShoppingCart size={20} />
			<span className={styles.cartCount}></span>
		</button>
	);
};

export default CartButton;
