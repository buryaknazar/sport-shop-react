import ProductCard from './ProductCard/ProductCard';

import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
	return (
		<div className={`${styles.productListContainer} ${products.length === 0 ? styles.flexCenter : ''}`}>
			{products.length > 0 ? (
				products.map(product => (
					<div key={product.id} className={styles.productItem}>
						<ProductCard product={product} />
					</div>
				))
			) : (
				<p className={styles.noProducts}>No products found</p>
			)}
		</div>
	);
};

export default ProductList;
