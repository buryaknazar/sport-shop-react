import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import CartItemsList from './CartItemsList/CartItemsList';

import { ArrowLeft, ShoppingBag } from 'lucide-react';
import styles from './CartContent.module.css';

import { pagesConfig } from '../../config/pages.config';

const CartContent = () => {
	const {
		items,
		removeItem,
		updateQuantity,
		clearCart,
		getTotalPrice,
		getTotalQuantity,
	} = useCart();

	const totalItems = useMemo(() => getTotalQuantity(), [items]);
	const totalPrice = useMemo(() => getTotalPrice(), [items]);

	return (
		<section className={styles.cartContent + ' container'}>
			<div className={styles.shopingCart}>
				<div className={styles.shopingCartHeader}>
					<h2 className={styles.cartTitle}>Shopping Cart</h2>
					<p className={styles.cartItemsCount}>{totalItems} Items</p>
				</div>

				<div className={styles.cartItemsList}>
					<CartItemsList items={items} />
				</div>

				<Link to={pagesConfig.catalog} className={styles.continueShoppingLink}>
					<ArrowLeft size={18} className={styles.continueShoppingIcon} />
					<span className={styles.continueShoppingText}>Continue Shopping</span>
				</Link>
			</div>

			<div className={styles.orderSummary}>
				<div className={styles.orderSummaryHeader}>
					<h2 className={styles.cartTitle}>Order Summary</h2>
				</div>

				<div className={styles.orderSummaryBody}>
					<div className={styles.orderInfoGroup}>
						<span className={styles.orderInfoText}>Items {totalItems}</span>
						<span className={styles.orderInfoPriceText}>${totalPrice}</span>
					</div>

					<div className={styles.promoCode}>
						<label htmlFor='promoCodeInput' className={styles.promoCodeLabel}>
							Promo Code
						</label>
						<input
							type='text'
							className={styles.promoCodeInput}
							placeholder='Enter your code'
							id='promoCodeInput'
						/>
					</div>
				</div>

				<div className={styles.orderSummaryFooter}>
					<div className={styles.orderInfoGroup}>
						<span className={styles.orderInfoText}>Total Cost</span>
						<span className={styles.orderInfoPriceText}>${totalPrice}</span>
					</div>

					<button className={styles.checkoutBtn}>
						<ShoppingBag size={20} />
						<span>Checkout</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default CartContent;
