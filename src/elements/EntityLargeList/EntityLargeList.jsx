import styles from './EntityLargeList.module.css';

const getNestedValue = (obj, path) => {
	return path.split('.').reduce((acc, part) => {
		return acc && acc[part] !== undefined ? acc[part] : '';
	}, obj);
};

const EntityLargeList = ({ list, columnsToShow, onEditClick }) => {
	if (!Array.isArray(list) || list.length === 0) {
		return <p>No data found</p>;
	}

	const headers = columnsToShow || Object.keys(list[0]);

	return (
		<div className={styles.tableWrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						{headers.map(header => (
							<th key={header}>{header}</th>
						))}
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{list.map(item => (
						<tr key={item.id}>
							{headers.map(field => (
								<td key={field}>{getNestedValue(item, field)}</td>
							))}
							<td className={styles.actions}>
								<button
									className={styles.editBtn}
									onClick={() => onEditClick && onEditClick(item)}
								>
									Edit
								</button>
								<button className={styles.deleteBtn}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EntityLargeList;
