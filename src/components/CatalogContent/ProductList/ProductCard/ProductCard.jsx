import styles from './ProductCard.module.css';

import { ShoppingCart, EyeIcon } from 'lucide-react';

const ProductCard = ({ product }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.cardImg}>
				<img
					src={product.imageUrl}
					alt={product.name}
					className={styles.productImage}
				/>
			</div>

			<div className='cardBody'>
				<h3 className={styles.productName}>{product.name}</h3>
				<p className={styles.productPrice}>${product.price.toFixed(2)}</p>
			</div>

			<div className={styles.cardActions}>
				<button className={styles.actionButton}>
					<ShoppingCart size={20} />
				</button>

				<button className={styles.actionButton}>
					<EyeIcon size={20} />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
