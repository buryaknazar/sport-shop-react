import { useState } from 'react';

import { login, register } from '../services/apiServices/authService';

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

	const registerUser = async userData => {
		setLoading(true);
		setError(null);
		try {
			const response = await register(userData);
			return response;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		loginUser,
		registerUser,
		loading,
		error,
	};
};
