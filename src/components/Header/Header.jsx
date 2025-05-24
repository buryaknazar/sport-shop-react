import NavMenu from './NavMenu/NavMenu';
import ProductSearchBar from '../../elements/ProductSearchBar/ProductSearchBar';
import CartButton from './CartButton/CartButton';

import styles from './Header.module.css';

import logo from '../../assets/images/logo.svg';
import { User } from 'lucide-react';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.headerLogo}>
					<img src={logo} alt='logo' className={styles.logo} />
				</div>

				<div className={styles.headerNav}>
					<NavMenu />
				</div>

				<div className={styles.headerActions}>
					<div className={styles.quickSearch}>
						<ProductSearchBar />
					</div>

					<div className={styles.cartAction}>
						<CartButton />
					</div>

					<div className={styles.userAction}>
						<button className={styles.userProfileButton}>
							<User size={20} />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
