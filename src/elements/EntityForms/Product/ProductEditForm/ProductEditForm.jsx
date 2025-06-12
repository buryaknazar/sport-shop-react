import { useState, useEffect } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const ProductEditForm = ({ entity, onSuccess }) => {
	const {
		editProduct,
		categories,
		colors,
		manufacturers,
		getCategoriesData,
		getColorsData,
		getManufacturersData,
		loading,
		error,
	} = useAdmin();

	const [description, setDescription] = useState(entity.description || '');
	const [name, setName] = useState(entity.name || '');
	const [price, setPrice] = useState(entity.price || '');
	const [size, setSize] = useState(entity.size || '');
	const [categoryId, setCategoryId] = useState('');
	const [colorId, setColorId] = useState('');
	const [manufacturerId, setManufacturerId] = useState('');
	const [imageUrl, setImageUrl] = useState(entity.imageUrl || '');
	const [localError, setLocalError] = useState(null);

	useEffect(() => {
		getCategoriesData();
		getColorsData();
		getManufacturersData();
	}, []);

	useEffect(() => {
		if (
			categories.length > 0 &&
			colors.length > 0 &&
			manufacturers.length > 0
		) {
			setCategoryId(entity.category.id || '');
			setColorId(entity.color.id || '');
			setManufacturerId(entity.manufacturer.id || '');
		}
	}, [categories, colors, manufacturers]);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (
			!description ||
			!name ||
			!price ||
			!size ||
			!categoryId ||
			!colorId ||
			!manufacturerId ||
			!imageUrl
		) {
			setLocalError('Please fill in all fields');
			return;
		}

		try {
			await editProduct({
				id: entity.id,
				name,
				description,
				price: parseFloat(price),
				size,
				categoryId,
				colorId,
				manufacturerId,
				imageUrl,
			});
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to update product');
		}
	};

	if (
		loading ||
		categories.length === 0 ||
		colors.length === 0 ||
		manufacturers.length === 0
	) {
		return <p>Loading form data...</p>;
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.label}>
				Name:
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				/>
			</label>

			<label className={styles.label}>
				Description:
				<input
					type='text'
					value={description}
					onChange={e => setDescription(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				/>
			</label>

			<label className={styles.label}>
				Price:
				<input
					type='number'
					step='0.01'
					value={price}
					onChange={e => setPrice(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				/>
			</label>

			<label className={styles.label}>
				Size:
				<input
					type='text'
					value={size}
					onChange={e => setSize(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				/>
			</label>

			<label className={styles.label}>
				Category:
				<select
					value={categoryId}
					onChange={e => {
						setCategoryId(e.target.value);
					}}
					className={styles.input}
					required
					disabled={loading}
				>
					<option value=''>Select category</option>
					{categories.map(cat => (
						<option key={cat.id} value={cat.id}>
							{cat.name}
						</option>
					))}
				</select>
			</label>

			<label className={styles.label}>
				Color:
				<select
					value={colorId}
					onChange={e => {
						setColorId(e.target.value);
					}}
					className={styles.input}
					required
					disabled={loading}
				>
					<option value=''>Select color</option>
					{colors.map(c => (
						<option key={c.id} value={c.id}>
							{c.name}
						</option>
					))}
				</select>
			</label>

			<label className={styles.label}>
				Manufacturer:
				<select
					value={manufacturerId}
					onChange={e => {
						setManufacturerId(e.target.value);
					}}
					className={styles.input}
					required
					disabled={loading}
				>
					<option value=''>Select manufacturer</option>
					{manufacturers.map(m => (
						<option key={m.id} value={m.id}>
							{m.name}
						</option>
					))}
				</select>
			</label>

			<label className={styles.label}>
				Image Url:
				<input
					type='text'
					value={imageUrl}
					onChange={e => setImageUrl(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				/>
			</label>

			{(localError || error) && (
				<p className={styles.error}>{localError || error}</p>
			)}

			<button type='submit' className={styles.submitButton} disabled={loading}>
				{loading ? 'Updating...' : 'Update Product'}
			</button>
		</form>
	);
};

export default ProductEditForm;
