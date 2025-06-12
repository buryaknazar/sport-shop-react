import { useState } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { Menu } from 'lucide-react';

import styles from './Sidebar.module.css';

import logo from '../../assets/images/logo.svg';

const Sidebar = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
			<div className={styles.logoContent}>
				<div className={styles.logo}>
					<img src={logo} alt='logo' className={styles.logoImg} />
				</div>

				<button
					className={styles.openBtn}
					onClick={() => setIsOpen(prev => !prev)}
				>
					<Menu size={25} />
				</button>
			</div>

			<ul className={styles.navList}>
				{items.map(item => (
					<SidebarItem
						key={item.title}
						title={item.title}
						icon={item.icon}
						linkPath={item.linkPath}
						isSidebarOpen={isOpen}
					/>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
