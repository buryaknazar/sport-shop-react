import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import CategoryAddForm from '../../../elements/EntityForms/Category/CategoryAddForm/CategoryAddForm';
import CategoryEditForm from '../../../elements/EntityForms/Category/CategoryEditForm/CategoryEditForm';
import CategoryDeleteForm from '../../../elements/EntityForms/Category/CategoryDeleteForm/CategoryDeleteForm';

const columnsToShow = ['id', 'name'];

const Categories = () => {
	const { categories, getCategoriesData } = useAdmin();

	useEffect(() => {
		getCategoriesData();
	}, []);

	return (
		<section className='container'>
			<EntityPage
				title='Categories'
				list={categories}
				columnsToShow={columnsToShow}
				AddForm={CategoryAddForm}
				EditForm={CategoryEditForm}
				DeleteForm={CategoryDeleteForm}
				onRefresh={getCategoriesData}
			/>
		</section>
	);
};

export default Categories;
