import { ArrowRight } from 'lucide-react';

import styles from './ProductSearchBar.module.css';

const ProductSearchBar = () => {
	return (
		<div className={styles.productSearchBar}>
			<input
				type='text'
				placeholder='Search products...'
				className={styles.searchInput}
			/>
			<button className={styles.searchButton}>
				<ArrowRight size={20} />
			</button>
		</div>
	);
};

export default ProductSearchBar;
