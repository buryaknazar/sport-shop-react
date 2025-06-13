import { useAdmin } from '../../../../hooks/useAdmin';

import styles from '../../EntityDeleteForm.module.css';

const UserDeleteForm = ({ entity, onSuccess }) => {
	const { removeUser } = useAdmin();

	const handleDelete = async () => {
		try {
			await removeUser(entity.id);
			if (onSuccess) onSuccess();
		} catch (err) {
			alert('Failed to delete');
		}
	};

	return (
		<div className={styles.deleteForm}>
			<p className={styles.formText}>
				Are you sure you want to delete <strong>{entity.name}</strong>?
			</p>
			<div className={styles.actions}>
				<button onClick={handleDelete} className={styles.confirmBtn}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default UserDeleteForm;
