import { useState } from 'react';
import { useUser } from '../context/UserContext';

import {
	getCategories,
	getManufacturers,
	getProducts,
	getUsers,
	getColors,
	addCategory,
	addManufacturer,
	addProduct,
	addUser,
	addColor,
	updateCategory,
	updateManufacturer,
	updateProduct,
	updateUser,
	updateColor,
	deleteCategory,
	deleteManufacturer,
	deleteProduct,
	deleteUser,
	deleteColor,
} from '../services/apiServices/adminService';

export const useAdmin = () => {
	const [categories, setCategories] = useState([]);
	const [manufacturers, setManufacturers] = useState([]);
	const [products, setProducts] = useState([]);
	const [users, setUsers] = useState([]);
	const [colors, setColors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { token } = useUser();

	// GET methods
	const getCategoriesData = async () => {
		await handleDataFetching(getCategories, setCategories);
	};

	const getManufacturersData = async () => {
		await handleDataFetching(getManufacturers, setManufacturers);
	};

	const getProductsData = async () => {
		await handleDataFetching(getProducts, setProducts);
	};

	const getUsersData = async () => {
		await handleDataFetching(getUsers, setUsers);
	};

	const getColorsData = async () => {
		await handleDataFetching(getColors, setColors);
	};

	// Generic fetch handler
	const handleDataFetching = async (fetchFn, setState) => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchFn();
			setState(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	// ADD methods
	const createCategory = category => addCategory(category, token);
	const createManufacturer = manufacturer =>
		addManufacturer(manufacturer, token);
	const createProduct = product => addProduct(product, token);
	const createUser = user => addUser(user, token);
	const createColor = color => addColor(color, token);

	// UPDATE methods
	const editCategory = category => updateCategory(category, token);
	const editManufacturer = manufacturer =>
		updateManufacturer(manufacturer, token);
	const editProduct = product => updateProduct(product, token);
	const editUser = user => updateUser(user, token);
	const editColor = color => updateColor(color, token);

	// DELETE methods
	const removeCategory = id => deleteCategory(id, token);
	const removeManufacturer = id => deleteManufacturer(id, token);
	const removeProduct = id => deleteProduct(id, token);
	const removeUser = id => deleteUser(id, token);
	const removeColor = id => deleteColor(id, token);

	return {
		// state
		categories,
		manufacturers,
		products,
		users,
		colors,
		loading,
		error,

		// fetch
		getCategoriesData,
		getManufacturersData,
		getProductsData,
		getUsersData,
		getColorsData,

		// create
		createCategory,
		createManufacturer,
		createProduct,
		createUser,
		createColor,

		// update
		editCategory,
		editManufacturer,
		editProduct,
		editUser,
		editColor,

		// delete
		removeCategory,
		removeManufacturer,
		removeProduct,
		removeUser,
		removeColor,
	};
};
