import { useState } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const CategoryEditForm = ({ entity, onSuccess }) => {
	const { editCategory, loading, error } = useAdmin();
	const [name, setName] = useState(entity.name || '');
	const [imageUrl, setImageUrl] = useState(entity.imageUrl || '');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!name.trim() || !imageUrl.trim()) {
			setLocalError('Please fill in all fields');
			return;
		}

		try {
			await editCategory({ id: entity.id, name, imageUrl });
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to update category');
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
				{loading ? 'Updating...' : 'Update Category'}
			</button>
		</form>
	);
};

export default CategoryEditForm;
