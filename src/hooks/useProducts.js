import { useState, useMemo } from 'react';
import {
	fetchFilteredProducts,
	fetchProductById,
} from '../services/apiServices/productsService';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchProducts = async (filter, page = 0, size = 10) => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchFilteredProducts(filter, page, size);
			setProducts(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const getProductById = async id => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchProductById(id);
			setProduct(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const resetProducts = () => {
		setProducts([]);
	};

	const resetProduct = () => {
		setProduct(null);
	};

	return useMemo(
		() => ({
			products,
			product,
			fetchProducts,
			getProductById,
			resetProducts,
			resetProduct,
			loading,
			error,
		}),
		[products, loading, error]
	);
};
