import { useState, useMemo } from 'react';
import { fetchFilteredProducts } from '../services/apiServices/productsService';

export const useProducts = token => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchProducts = async (filter, page = 0, size = 10) => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchFilteredProducts(filter, token, page, size);
			setProducts(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const resetProducts = () => {
		setProducts([]);
	};

	return useMemo(
		() => ({
			products,
			fetchProducts,
			resetProducts,
			loading,
			error,
		}),
		[products, loading, error]
	);
};
