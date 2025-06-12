import { useState } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const CategoryAddForm = ({ onSuccess }) => {
	const { createCategory, loading, error } = useAdmin();
	const [name, setName] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!name.trim() || !imageUrl.trim()) {
			setLocalError('Please fill in all fields');
			return;
		}

		try {
			await createCategory({ name, imageUrl });
			setName('');
			setImageUrl('');
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to add category');
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
					required
					className={styles.input}
					disabled={loading}
				/>
			</label>
			<label className={styles.label}>
				Image URL:
				<input
					type='text'
					value={imageUrl}
					onChange={e => setImageUrl(e.target.value)}
					required
					className={styles.input}
					disabled={loading}
				/>
			</label>
			{(localError || error) && (
				<p className={styles.error}>{localError || error}</p>
			)}
			<button type='submit' disabled={loading} className={styles.submitButton}>
				{loading ? 'Adding...' : 'Add Category'}
			</button>
		</form>
	);
};

export default CategoryAddForm;
