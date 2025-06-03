import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import { useAuth } from '../../hooks/useAuth';

import styles from './LoginContent.module.css';

import { pagesConfig } from '../../config/pages.config';

const LoginContent = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useUser();
	const { loginUser, loading, error } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const userData = await loginUser({ username, password });
			setUser(userData);
			navigate('/');
		} catch (err) {
			console.error('Login failed:', err);
			alert('Login failed. Please check your credentials and try again.');
		}
	};

	return (
		<section className={styles.loginSection}>
			<form className={styles.loginForm} onSubmit={handleSubmit}>
				<h2 className={styles.title}>Sign In</h2>

				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>

				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>

				<button type='submit' disabled={loading} className={styles.submitBtn}>
					{loading ? 'Signing in...' : 'Sign In'}
				</button>

				<span className={styles.registerLink}>
					<Link to={pagesConfig.register} className={styles.registerLink}>
						Don't have an account yet?
					</Link>
				</span>
			</form>
		</section>
	);
};

export default LoginContent;
