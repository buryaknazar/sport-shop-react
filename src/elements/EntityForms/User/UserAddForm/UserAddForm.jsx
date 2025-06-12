import { useState, useEffect } from 'react';
import { useAdmin } from '../../../../hooks/useAdmin';
import styles from '../../EntityForm.module.css';

const UserAddForm = ({ onSuccess }) => {
	const { createUser, loading, error } = useAdmin();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('USER');
	const [localError, setLocalError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLocalError(null);

		if (!username || !email || !password) {
			setLocalError('Please fill in all fields');
			return;
		}

		try {
			await createUser({ username, email, password, role });
			setUsername('');
			setEmail('');
			setPassword('');
			setRole('USER');
			if (onSuccess) onSuccess();
		} catch (err) {
			setLocalError(err.message || 'Failed to add user');
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
				Password:
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
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
				{loading ? 'Adding...' : 'Add User'}
			</button>
		</form>
	);
};

export default UserAddForm;
