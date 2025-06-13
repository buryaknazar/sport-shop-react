import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import ColorAddForm from '../../../elements/EntityForms/Color/ColorAddForm/ColorAddForm';
import ColorEditForm from '../../../elements/EntityForms/Color/ColorEditForm/ColorEditForm';
import ColorDeleteForm from '../../../elements/EntityForms/Color/ColorDeleteForm/ColorDeleteForm';

const columnsToShow = ['id', 'name'];

const Colors = () => {
	const { colors, getColorsData } = useAdmin();

	useEffect(() => {
		getColorsData();
	}, []);

	return (
		<section className='container'>
			<EntityPage
				title='Colors'
				list={colors}
				columnsToShow={columnsToShow}
				AddForm={ColorAddForm}
				EditForm={ColorEditForm}
				DeleteForm={ColorDeleteForm}
				onRefresh={getColorsData}
			></EntityPage>
		</section>
	);
};

export default Colors;
