import { useState } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const ManufacturerAddForm = ({ onSuccess }) => {
	const { createManufacturer, loading, error } = useAdmin();
	const [name, setName] = useState('');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!name.trim()) {
			setLocalError('Please fill in the name');
			return;
		}

		try {
			await createManufacturer({ name });
			setName('');
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to add manufacturer');
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
				{loading ? 'Adding...' : 'Add Manufacturer'}
			</button>
		</form>
	);
};

export default ManufacturerAddForm;
