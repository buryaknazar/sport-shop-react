import { Link } from 'react-router-dom';

import styles from './EntityList.module.css';

import { ArrowRight } from 'lucide-react';

const EntityList = ({ list, title, displayField = 'name', link }) => {
	return (
		<div className={styles.listWrapper}>
			<div className={styles.entityListHeader}>
				<h3 className={styles.listTitle}>{title}</h3>

				<Link to={link} className={styles.link}>
					<ArrowRight size={17} />
					<span>Details</span>
				</Link>
			</div>

			<ul className={styles.listContainer}>
				{list.map(item => (
					<li key={item.id || item[displayField]} className={styles.listItem}>
						<span className={styles.name}>{item[displayField]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EntityList;
