import { Link } from 'react-router-dom';

import styles from './CartButton.module.css';

import { ShoppingCart } from 'lucide-react';

import { pagesConfig } from '../../../config/pages.config';

const CartButton = () => {
	return (
		<button className={styles.cartButton} aria-label='Cart'>
			<Link to={pagesConfig.cart} className={styles.cartLink}>
				<ShoppingCart size={20} />
				<span className={styles.cartCount}></span>
			</Link>
		</button>
	);
};

export default CartButton;
