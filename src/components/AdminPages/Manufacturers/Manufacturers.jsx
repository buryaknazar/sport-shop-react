import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import ManufacturerAddForm from '../../../elements/EntityForms/Manufacturer/ManufacturerAddForm/ManufacturerAddForm';
import ManufacturerEditForm from '../../../elements/EntityForms/Manufacturer/ManufacturerEditForm/ManufacturerEditForm';
import ManufacturerDeleteForm from '../../../elements/EntityForms/Manufacturer/ManufacturerDeleteForm/ManufacturerDeleteForm';

const columnsToShow = ['id', 'name'];

const Manufacturers = () => {
	const { manufacturers, getManufacturersData } = useAdmin();

	useEffect(() => {
		getManufacturersData();
	}, []);

	return (
		<section className='container'>
			<EntityPage
				title='Manufacturers'
				list={manufacturers}
				columnsToShow={columnsToShow}
				AddForm={ManufacturerAddForm}
				EditForm={ManufacturerEditForm}
				DeleteForm={ManufacturerDeleteForm}
				onRefresh={getManufacturersData}
			></EntityPage>
		</section>
	);
};

export default Manufacturers;
