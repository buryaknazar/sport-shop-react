import { useState } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const ColorEditForm = ({ entity, onSuccess }) => {
	const { editColor, loading, error } = useAdmin();
	const [name, setName] = useState(entity.name || '');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!name.trim()) {
			setLocalError('Please fill in the name');
			return;
		}

		try {
			await editColor({ id: entity.id, name });
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to update color');
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
			{(localError || error) && (
				<p className={styles.error}>{localError || error}</p>
			)}
			<button type='submit' disabled={loading} className={styles.submitButton}>
				{loading ? 'Updating...' : 'Update Color'}
			</button>
		</form>
	);
};

export default ColorEditForm;
