import { NavLink } from 'react-router-dom';

import styles from './NavMenuItem.module.css';

const NavMenuItem = ({ label, to }) => {
	return (
		<li className={styles.navMenuItem}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
				}
			>
				{label}
			</NavLink>
		</li>
	);
};

export default NavMenuItem;
