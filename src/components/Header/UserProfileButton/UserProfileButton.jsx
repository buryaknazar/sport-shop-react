import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../../../context/UserContext';

import styles from './UserProfileButton.module.css';

import { User } from 'lucide-react';

import { pagesConfig } from '../../../config/pages.config.js';

const UserProfileButton = () => {
	const [open, setOpen] = useState(false);
	const { user, logout } = useUser();
	const menuRef = useRef(null);
	const navigate = useNavigate();

	const handleClickOutside = e => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleOptionClick = action => {
		setOpen(false);
		if (action === 'logout') {
			logout();
			navigate(pagesConfig.home);
			return;
		}
		navigate(action);
	};

	return (
		<div className={styles.userProfileWrapper} ref={menuRef}>
			<button
				className={styles.userProfileButton}
				onClick={() => setOpen(prev => !prev)}
			>
				<User size={20} />
			</button>

			{open && (
				<ul className={styles.dropdownMenu}>
					{user ? (
						<>
							<li onClick={() => handleOptionClick(pagesConfig.profile)}>
								Profile
							</li>
							{user.role === 'ADMIN' && (
								<li onClick={() => handleOptionClick(pagesConfig.admin)}>
									Dashboard
								</li>
							)}
							<li onClick={() => handleOptionClick('logout')}>Logout</li>
						</>
					) : (
						<>
							<li onClick={() => handleOptionClick(pagesConfig.login)}>
								Sign in
							</li>
							<li onClick={() => handleOptionClick(pagesConfig.register)}>
								Sign up
							</li>
						</>
					)}
				</ul>
			)}
		</div>
	);
};

export default UserProfileButton;
