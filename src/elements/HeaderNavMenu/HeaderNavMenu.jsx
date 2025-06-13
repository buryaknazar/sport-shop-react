import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import HeaderNavMenuItem from './HeaderNavMenuItem/HeaderNavMenuItem';

import { X, Menu, LogOut } from 'lucide-react';

import styles from './HeaderNavMenu.module.css';

import { pagesConfig } from '../../config/pages.config';

const HeaderNavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logout } = useUser();
	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const handleLogout = () => {
		logout();
		navigate(pagesConfig.home);
	};

	return (
		<div className={styles.mobileMenuWrapper}>
			<button className={styles.burgerBtn} onClick={toggleMenu}>
				<Menu size={25} />
			</button>

			<div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
				<div className={styles.overlayHeader}>
					<button className={styles.closeBtn} onClick={closeMenu}>
						<X size={25} />
					</button>

					<button className={styles.logout} onClick={handleLogout}>
						<LogOut size={25} />
					</button>
				</div>

				<nav className={styles.menuContainer}>
					<ul className={styles.menu}>
						<HeaderNavMenuItem label='Home' to={pagesConfig.home} />
						<HeaderNavMenuItem label='Catalog' to={pagesConfig.catalog} />
						<HeaderNavMenuItem label='About Us' to={pagesConfig.about} />
						<HeaderNavMenuItem label='Contact Us' to={pagesConfig.contact} />
						<HeaderNavMenuItem label='Cart' to={pagesConfig.cart} />

						{user ? (
							<>
								<HeaderNavMenuItem label='Profile' to={pagesConfig.profile} />
								{user.role === 'ADMIN' && (
									<HeaderNavMenuItem label='Dashboard' to={pagesConfig.admin} />
								)}
							</>
						) : (
							<>
								<HeaderNavMenuItem label='Sing In' to={pagesConfig.login} />
								<HeaderNavMenuItem label='Sing Up' to={pagesConfig.register} />
							</>
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default HeaderNavMenu;
