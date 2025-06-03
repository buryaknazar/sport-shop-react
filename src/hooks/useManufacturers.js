import { useState } from 'react';

import { fetchManufacturers } from '../services/apiServices/manufacturersService';

export const useManufacturers = () => {
	const [manufacturers, setManufacturers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchManufacturersData = async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchManufacturers();
			setManufacturers(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const resetManufacturers = () => {
		setManufacturers([]);
	};

	return {
		manufacturers,
		fetchManufacturersData,
		resetManufacturers,
		loading,
		error,
	};
};
