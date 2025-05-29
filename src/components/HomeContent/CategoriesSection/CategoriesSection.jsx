import CategoriesList from './CategoriesList/CategoriesList';

import styles from './CategoriesSection.module.css';

const CategoriesSection = () => {
	return (
		<section className={styles.categoriesSection}>
			<div className='container'>
				<div className={styles.categoriesSectionContent}>
					<CategoriesList />
				</div>
			</div>
		</section>
	);
};

export default CategoriesSection;
