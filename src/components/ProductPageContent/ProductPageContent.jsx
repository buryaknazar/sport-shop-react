import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../context/CartContext';

import styles from './ProductPageContent.module.css';

const ProductPageContent = () => {
	const { id } = useParams();
	const { product, getProductById } = useProducts();
	const { addItem } = useCart();

	useEffect(() => {
		if (id) {
			getProductById(id);
		}
	}, [id]);

	if (!product) return <p className={styles.loading}>Loading...</p>;

	const handleAddToCart = () => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.imageUrl,
			quantity: 1,
		});
		alert(`${product.name} додано до кошика!`);
	};

	return (
		<div className='container'>
			<div className={styles.productPageWrapper}>
				<div className={styles.productHeader}>
					<div className={styles.productImage}>
						<img src={product.imageUrl} alt={product.name} />
					</div>

					<div className={styles.productInfo}>
						<h1 className={styles.productName}>{product.name}</h1>
						<p className={styles.productManufacturer}>
							Manufacturer: <strong>{product.manufacturer?.name}</strong>
						</p>
						<p className={styles.productCategory}>
							Category: <strong>{product.category?.name}</strong>
						</p>
						<p className={styles.productColor}>
							Color: <strong>{product.color?.name}</strong>
						</p>
						<p className={styles.productSize}>
							Size: <strong>{product.size}</strong>
						</p>
						<p className={styles.productPrice}>
							Price: <strong>${product.price.toFixed(2)}</strong>
						</p>

						<div className={styles.actions}>
							<button onClick={handleAddToCart} className={styles.addToCartBtn}>
								Add to cart
							</button>
						</div>
					</div>
				</div>

				<div className={styles.productDescription}>
					<h2>Description</h2>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductPageContent;
