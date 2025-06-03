import { useState, useEffect, use } from 'react';

import FilterSection from './FilterSection/FilterSection';
import ProductList from './ProductList/ProductList';

import { useProducts } from '../../hooks/useProducts';

import styles from './CatalogContent.module.css';

const CatalogContent = () => {
	const [filters, setFilters] = useState({
		colorId: '',
		size: '',
		manufacturerId: '',
		name: '',
		categoryId: '',
		minPrice: '',
		maxPrice: '',
	});

	const { products, fetchProducts } = useProducts();

	useEffect(() => {
		fetchProducts(filters);
	}, [filters]);

	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<section className={styles.catalogContent}>
			<div className={styles.filterSection}>
				<FilterSection filters={filters} setFilters={setFilters} />
			</div>

			<div className={styles.productList}>
				<ProductList products={products?.content || []} />
			</div>
		</section>
	);
};

export default CatalogContent;
