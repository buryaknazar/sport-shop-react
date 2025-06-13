import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import UserAddForm from '../../../elements/EntityForms/User/UserAddForm/UserAddForm';
import UserEditForm from '../../../elements/EntityForms/User/UserEditForm/UserEditForm';
import UserDeleteForm from '../../../elements/EntityForms/User/UserDeleteForm/UserDeleteForm';

const columnsToShow = ['id', 'username', 'email'];

const Users = () => {
	const { users, getUsersData } = useAdmin();

	useEffect(() => {
		getUsersData();
	}, []);

	return (
		<section className='container'>
			<EntityPage
				title='Users'
				list={users}
				columnsToShow={columnsToShow}
				AddForm={UserAddForm}
				EditForm={UserEditForm}
				DeleteForm={UserDeleteForm}
				onRefresh={getUsersData}
			></EntityPage>
		</section>
	);
};

export default Users;
