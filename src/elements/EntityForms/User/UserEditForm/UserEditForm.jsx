import { useState } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const UserEditForm = ({ entity, onSuccess }) => {
	const { editUser, loading, error } = useAdmin();
	const [username, setUsername] = useState(entity.username || '');
	const [email, setEmail] = useState(entity.email || '');
	const [role, setRole] = useState(entity.role || 'USER');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!username || !email) {
			setLocalError('Please fill in all fields');
			return;
		}

		try {
			await editUser({ id: entity.id, username, email, role });
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to update user');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.label}>
				Username:
				<input
					type='text'
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
					className={styles.input}
					disabled={loading}
				/>
			</label>
			<label className={styles.label}>
				Email:
				<input
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
					className={styles.input}
					disabled={loading}
				/>
			</label>
			<label className={styles.label}>
				Role:
				<select
					value={role}
					onChange={e => setRole(e.target.value)}
					className={styles.input}
					disabled={loading}
				>
					<option value='USER'>USER</option>
					<option value='ADMIN'>ADMIN</option>
				</select>
			</label>
			{(localError || error) && (
				<p className={styles.error}>{localError || error}</p>
			)}
			<button type='submit' disabled={loading} className={styles.submitButton}>
				{loading ? 'Updating...' : 'Update User'}
			</button>
		</form>
	);
};

export default UserEditForm;
