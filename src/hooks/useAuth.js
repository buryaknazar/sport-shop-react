import { useState } from 'react';

import { login } from '../services/apiServices/authService';

export const useAuth = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const loginUser = async credentials => {
		setLoading(true);
		setError(null);
		try {
			const userData = await login(credentials);
			localStorage.setItem('token', userData.token);
			return userData;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		loginUser,
		loading,
		error,
	};
};
