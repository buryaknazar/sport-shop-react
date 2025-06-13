import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';

import styles from './ProductCard.module.css';

import { ShoppingCart, EyeIcon } from 'lucide-react';

const ProductCard = ({ product }) => {
	const { addItem } = useCart();
	const navigate = useNavigate();

	const handleAddToCart = () => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.imageUrl,
			quantity: 1,
		});

		alert(`${product.name} has been added to your cart!`);
	};

	const handleDetails = () => {
		navigate(`/products/${product.id}`);
	};

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
				<button className={styles.actionButton} onClick={handleAddToCart}>
					<ShoppingCart size={20} />
				</button>

				<button className={styles.actionButton} onClick={handleDetails}>
					<EyeIcon size={20} />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
