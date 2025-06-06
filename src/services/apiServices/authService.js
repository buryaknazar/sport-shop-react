import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const login = async credentials => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/auth/login`,
			credentials,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error during login:', error);
		throw error;
	}
};

const register = async userData => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/auth/register`,
			userData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error during registration:', error);
		throw error;
	}
};

export { login, register };
