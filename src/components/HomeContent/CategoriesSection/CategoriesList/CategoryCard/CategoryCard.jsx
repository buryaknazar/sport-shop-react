import styles from './CategoryCard.module.css';

import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
	return (
		<div className={styles.categoryCard}>
			<div className={styles.categoryImage}>
				<img src={category.imageUrl} alt='Category' />
			</div>

			<div className={styles.cardBody}>
				<div className={styles.cardHeader}>
					<div className={styles.categoryTitle}>{category.name}</div>

					<button className={styles.viewButton}>
						<ArrowRight size={17} />
					</button>
				</div>

				<div className={styles.categoryDescription}>84 items available</div>
			</div>
		</div>
	);
};

export default CategoryCard;
