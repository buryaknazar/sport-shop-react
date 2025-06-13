import Sidebar from '../elements/Sidebar/Sidebar';

import styles from '../styles/AdminLayout.module.css';

import {
	Home,
	LayoutDashboard,
	User,
	Handshake,
	Shirt,
	ChartBarStacked,
	Palette,
} from 'lucide-react';

import { pagesConfig } from '../config/pages.config';

const sidebarItems = [
	{ title: 'Home', icon: Home, linkPath: pagesConfig.home },
	{
		title: 'Dashboard',
		icon: LayoutDashboard,
		linkPath: pagesConfig.admin,
	},
	{ title: 'Users', icon: User, linkPath: pagesConfig.adminUsers },
	{
		title: 'Partners',
		icon: Handshake,
		linkPath: pagesConfig.adminManufacturers,
	},
	{ title: 'Products', icon: Shirt, linkPath: pagesConfig.adminProducts },
	{
		title: 'Categories',
		icon: ChartBarStacked,
		linkPath: pagesConfig.adminCategories,
	},
	{ title: 'Colors', icon: Palette, linkPath: pagesConfig.adminColors },
];

const AdminLayout = ({ children }) => {
	return (
		<>
			<Sidebar items={sidebarItems} />
			<main className={styles.main}>{children}</main>
		</>
	);
};

export default AdminLayout;
