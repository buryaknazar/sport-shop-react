import { useState, useEffect } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const ProductCreateForm = ({ onSuccess }) => {
	const {
		createProduct,
		categories,
		colors,
		manufacturers,
		getCategoriesData,
		getColorsData,
		getManufacturersData,
		loading,
		error,
	} = useAdmin();

	const [description, setDescription] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [size, setSize] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [colorId, setColorId] = useState('');
	const [manufacturerId, setManufacturerId] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [localError, setLocalError] = useState(null);

	useEffect(() => {
		getCategoriesData();
		getColorsData();
		getManufacturersData();
	}, []);

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
			await createProduct({
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
			setLocalError(err.message || 'Failed to create product');
		}
	};

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
					onChange={e => setCategoryId(e.target.value)}
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
					onChange={e => setColorId(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				>
					<option value=''>Select color</option>
					{colors.map(color => (
						<option key={color.id} value={color.id}>
							{color.name}
						</option>
					))}
				</select>
			</label>

			<label className={styles.label}>
				Manufacturer:
				<select
					value={manufacturerId}
					onChange={e => setManufacturerId(e.target.value)}
					className={styles.input}
					required
					disabled={loading}
				>
					<option value=''>Select manufacturer</option>
					{manufacturers.map(man => (
						<option key={man.id} value={man.id}>
							{man.name}
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
				{loading ? 'Creating...' : 'Create Product'}
			</button>
		</form>
	);
};

export default ProductCreateForm;
