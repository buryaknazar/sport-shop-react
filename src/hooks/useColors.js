import { useState } from 'react';

import { fetchColors } from '../services/apiServices/colorsService';

export const useColors = () => {
	const [colors, setColors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchColorsData = async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchColors();
			setColors(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const resetColors = () => {
		setColors([]);
	};

	return {
		colors,
		fetchColorsData,
		resetColors,
		loading,
		error,
	};
};
