import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

import styles from './CartButton.module.css';

import { ShoppingCart } from 'lucide-react';

import { pagesConfig } from '../../../config/pages.config';

const CartButton = () => {
	const { getTotalQuantity } = useCart();
	let cartItemsCount = getTotalQuantity();

	return (
		<button className={styles.cartButton} aria-label='Cart'>
			<Link to={pagesConfig.cart} className={styles.cartLink}>
				<ShoppingCart size={20} />
				<span
					className={`${styles.cartCount} ${
						cartItemsCount > 0 ? styles.cartCountShow : ''
					}`}
				>
					{cartItemsCount}
				</span>
			</Link>
		</button>
	);
};

export default CartButton;
