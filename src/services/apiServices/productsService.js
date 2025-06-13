import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchFilteredProducts = async (filter, page = 0, size = 10) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/products/filter`,
			filter,
			{
				params: { page, size },
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching filtered products:', error);
		throw error;
	}
};

export const fetchProductById = async id => {
	try {
		const response = await axios.get(`${API_BASE_URL}/products/${id}`);
		console.log(response);
		return response.data;
	} catch (error) {
		console.error('Error fetching product by id:', error);
		throw error;
	}
};
