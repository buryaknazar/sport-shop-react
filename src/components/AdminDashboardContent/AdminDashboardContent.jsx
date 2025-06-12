import { useEffect } from 'react';
import { useAdmin } from '../../hooks/useAdmin';

import InfoSection from './InfoSection/InfoSection';
import EntityList from './EntityList/EntityList';

import { User, Shirt, ChartBarStacked, Handshake } from 'lucide-react';

import styles from './AdminDashboardContent.module.css';

import { pagesConfig } from '../../config/pages.config';

const AdminDashboardContent = () => {
	const {
		categories,
		manufacturers,
		products,
		users,
		getCategoriesData,
		getManufacturersData,
		getProductsData,
		getUsersData,
	} = useAdmin();

	useEffect(() => {
		const fetchData = async () => {
			await Promise.all([
				getCategoriesData(),
				getManufacturersData(),
				getProductsData(),
				getUsersData(),
			]);
		};

		fetchData();
	}, []);

	return (
		<section className='container'>
			<div className={styles.dashboardWrapper}>
				<div className={styles.infoSections}>
					<InfoSection title='Users:' value={users.length} icon={<User />} />

					<InfoSection
						title='Partners:'
						value={manufacturers.length}
						icon={<Handshake />}
					/>

					<InfoSection
						title='Available Products:'
						value={products.length}
						icon={<Shirt />}
					/>

					<InfoSection
						title='Available Categories:'
						value={categories.length}
						icon={<ChartBarStacked />}
					/>
				</div>

				<div className={styles.entitiesLists}>
					<EntityList
						list={users}
						title='Users'
						link={pagesConfig.adminUsers}
						displayField='email'
					/>

					<EntityList
						list={manufacturers}
						title='Partners'
						link={pagesConfig.adminManufacturers}
					/>

					<EntityList
						list={products}
						title='Products'
						link={pagesConfig.adminProducts}
					/>

					<EntityList
						list={categories}
						title='Categories'
						link={pagesConfig.adminCategories}
					/>
				</div>
			</div>
		</section>
	);
};

export default AdminDashboardContent;
