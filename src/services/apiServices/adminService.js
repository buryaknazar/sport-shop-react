import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

import { fetchCategories } from './categoriesService';
import { fetchManufacturers } from './manufacturersService';

export const getCategories = async () => {
	return await fetchCategories();
};

export const getManufacturers = async () => {
	return await fetchManufacturers();
};

export const getProducts = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/products`);
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};

export const getUsers = async () => {
	try {
		const response = await await axios.get(`${API_BASE_URL}/users`);
		return response.data;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};

export const getColors = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/colors`);
		return response.data;
	} catch (error) {
		console.error('Error fetching colors:', error);
		throw error;
	}
};

export const addCategory = async (category, token) => {
	const res = await fetch(`${API_BASE_URL}/categories`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const addManufacturer = async (manufacturer, token) => {
	const res = await fetch(`${API_BASE_URL}/manufacturers`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(manufacturer),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const addProduct = async (product, token) => {
	const res = await fetch(`${API_BASE_URL}/products`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(product),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const addUser = async (user, token) => {
	const res = await fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const addColor = async (color, token) => {
	const res = await fetch(`${API_BASE_URL}/colors`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(color),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

// UPDATE
export const updateCategory = async (category, token) => {
	const res = await fetch(`${API_BASE_URL}/categories/${category.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const updateManufacturer = async (manufacturer, token) => {
	const res = await fetch(`${API_BASE_URL}/manufacturers/${manufacturer.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(manufacturer),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const updateProduct = async (product, token) => {
	const res = await fetch(`${API_BASE_URL}/products/${product.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(product),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const updateUser = async (user, token) => {
	const res = await fetch(`${API_BASE_URL}/users/${user.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	});

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

export const updateColor = async (color, token) => {
	const res = await fetch(`${API_BASE_URL}/colors/${color.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(color),
	});
	console.log(res);

	if (res.status != 200) {
		throw new Error('Error add/update action!');
	}

	return res.json();
};

// DELETE
export const deleteCategory = async (id, token) => {
	await fetch(`${API_BASE_URL}/categories/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const deleteManufacturer = async (id, token) => {
	await fetch(`${API_BASE_URL}/manufacturers/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const deleteProduct = async (id, token) => {
	await fetch(`${API_BASE_URL}/products/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const deleteUser = async (id, token) => {
	await fetch(`${API_BASE_URL}/users/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const deleteColor = async (id, token) => {
	await fetch(`${API_BASE_URL}/colors/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
