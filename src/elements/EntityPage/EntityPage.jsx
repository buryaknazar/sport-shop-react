import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from '../../components/ui/modal';
import EntityLargeList from '../EntityLargeList/EntityLargeList';

import styles from './EntityPage.module.css';

const EntityPage = ({
	title,
	list,
	columnsToShow,
	AddForm,
	EditForm,
	DeleteForm,
	onRefresh,
}) => {
	const [isAddOpen, setIsAddOpen] = useState(false);
	const [editItem, setEditItem] = useState(null);
	const [deleteItem, setDeleteItem] = useState(null);

	const openAddModal = () => setIsAddOpen(true);
	const closeAddModal = () => setIsAddOpen(false);

	const openEditModal = item => setEditItem(item);
	const closeEditModal = () => setEditItem(null);

	const openDeleteModal = item => setDeleteItem(item);
	const closeDeleteModal = () => setDeleteItem(null);

	const handleSuccess = () => {
		if (onRefresh) onRefresh();
		closeAddModal();
		closeEditModal();
		closeDeleteModal();
	};

	return (
		<div className={styles.entityPageWrapper}>
			<div className={styles.pageHeader}>
				<h1 className={styles.title}>{title}</h1>

				<button onClick={openAddModal} className={styles.addEntityButton}>
					<Plus size={20} />
					Add New
				</button>
			</div>

			<div className={styles.pageBody}>
				<EntityLargeList
					list={list}
					columnsToShow={columnsToShow}
					onEditClick={openEditModal}
					onDeleteClick={openDeleteModal}
				/>
			</div>

			{AddForm && (
				<Modal
					title={`Add New ${title.slice(0, -1)}`}
					open={isAddOpen}
					onOpenChange={setIsAddOpen}
				>
					<AddForm onSuccess={handleSuccess} />
				</Modal>
			)}

			{EditForm && editItem && (
				<Modal
					title={`Edit ${title.slice(0, -1)}`}
					open={!!editItem}
					onOpenChange={setEditItem}
				>
					<EditForm entity={editItem} onSuccess={handleSuccess} />
				</Modal>
			)}

			{DeleteForm && deleteItem && (
				<Modal
					title={`Delete ${title.slice(0, -1)}`}
					open={!!deleteItem}
					onOpenChange={setDeleteItem}
				>
					<DeleteForm entity={deleteItem} onSuccess={handleSuccess} />
				</Modal>
			)}
		</div>
	);
};

export default EntityPage;
