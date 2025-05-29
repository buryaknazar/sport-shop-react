import { useState } from 'react';

import { fetchCategories } from '../services/apiServices/categoriesService';

export const useCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchCategoriesData = async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchCategories();
			setCategories(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const resetCategories = () => {
		setCategories([]);
	};

	return {
		categories,
		fetchCategoriesData,
		resetCategories,
		loading,
		error,
	};
};
