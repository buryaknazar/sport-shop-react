import NavMenuItem from './NavMenuItem/NavMenuItem';

import { pagesConfig } from '../../../config/pages.config';

import styles from './NavMenu.module.css';

const NavMenu = () => {
	return (
		<nav className={styles.navMenu}>
			<ul className={styles.navMenuList}>
				<NavMenuItem label='Home' to={pagesConfig.home} />
				<NavMenuItem label='Catalog' to={pagesConfig.catalog} />
				<NavMenuItem label='About Us' to={pagesConfig.about} />
				<NavMenuItem label='Contact Us' to={pagesConfig.contact} />
			</ul>
		</nav>
	);
};

export default NavMenu;
