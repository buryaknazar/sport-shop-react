import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchColors = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/colors`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw error;
	}
};
