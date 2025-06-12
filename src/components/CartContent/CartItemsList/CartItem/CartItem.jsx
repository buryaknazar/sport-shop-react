import { useCart } from '../../../../context/CartContext';

import { Minus, Plus, Trash2 } from 'lucide-react';

import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
	const { updateQuantity, removeItem } = useCart();

	const handleIncrement = () => {
		updateQuantity(item.id, item.quantity + 1);
	};

	const handleDecrement = () => {
		updateQuantity(item.id, item.quantity - 1);
	};

	return (
		<li className={styles.cartItem}>
			<div className={styles.itemDetails}>
				<div className={styles.itemImageContainer}>
					<img src={item.image} alt={item.name} className={styles.itemImage} />
				</div>

				<div className={styles.itemInfo}>
					<h3 className={styles.itemName}>{item.name}</h3>
				</div>
			</div>

			<div className={styles.itemQuantityContainer}>
				<Minus
					size={20}
					onClick={handleDecrement}
					className={styles.quantityButton}
				/>

				<input
					type='number'
					value={item.quantity}
					onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
					className={styles.quantityInput}
				/>

				<Plus
					size={20}
					onClick={handleIncrement}
					className={styles.quantityButton}
				/>
			</div>

			<div className={styles.itemInfo}>
				<p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
			</div>

			<div className={styles.itemInfo}>
				<p className={styles.itemPrice}>
					${(item.price * item.quantity).toFixed(2)}
				</p>
			</div>

			<div className={styles.itemInfo}>
				<button
					onClick={() => removeItem(item.id)}
					className={styles.removeButton}
				>
					<Trash2 size={23} />
				</button>
			</div>
		</li>
	);
};

export default CartItem;
