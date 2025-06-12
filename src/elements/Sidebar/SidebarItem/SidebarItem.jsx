import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './SidebarItem.module.css';

const SidebarItem = ({ title, icon: Icon, linkPath, isSidebarOpen }) => {
	const location = useLocation();
	const isActive = location.pathname === linkPath;

	return (
		<li className={styles.item}>
			<Link
				to={linkPath}
				className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
			>
				<div
					className={`${styles.iconContainer} ${
						!isSidebarOpen ? styles.selfCenter : ''
					}`}
				>
					<Icon size={25} />
				</div>
				<span
					className={`${styles.linkName} ${
						isSidebarOpen ? styles.linkNameActive : ''
					}`}
				>
					{title}
				</span>
			</Link>

			<span
				className={`${styles.customTooltip} ${
					isSidebarOpen ? styles.hideCustomTooltip : ''
				}`}
			>
				{title}
			</span>
		</li>
	);
};

export default SidebarItem;
