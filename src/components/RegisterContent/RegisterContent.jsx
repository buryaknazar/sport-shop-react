import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import styles from './RegisterContent.module.css';

import { pagesConfig } from '../../config/pages.config';

const RegisterContent = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const { registerUser, loading, error } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		try {
			const response = await registerUser({ username, email, password });

			if (response.success) {
				alert('Registration successful! You can now sign in.');
				navigate(pagesConfig.login);
			} else {
				alert('Registration failed: ' + response);
			}
		} catch (err) {
			console.error('Register failed:', err);
			alert('Register failed, try again later.');
		}
	};

	return (
		<section className={styles.registerSection}>
			<form className={styles.registerForm} onSubmit={handleSubmit}>
				<h2 className={styles.title}>Sign Up</h2>

				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>

				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>

				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>

				<input
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>

				<button type='submit' disabled={loading} className={styles.submitBtn}>
					{loading ? 'Signing Up...' : 'Sign Up'}
				</button>

				<span className={styles.loginLink}>
					<Link to={pagesConfig.login} className={styles.loginLink}>
						Already have an account?
					</Link>
				</span>
			</form>
		</section>
	);
};

export default RegisterContent;
