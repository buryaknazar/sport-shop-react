import { useEffect, useState, useRef } from 'react';
import { useCategories } from '../../../../hooks/useCategories';

import { ArrowRight, ArrowLeft } from 'lucide-react';

import CategoryCard from './CategoryCard/CategoryCard';

import styles from './CategoriesList.module.css';

const CategoriesList = () => {
	const { categories, fetchCategoriesData, resetCategories, loading, error } =
		useCategories();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);
	const containerRef = useRef(null);

	useEffect(() => {
		fetchCategoriesData();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (!containerRef.current) return;
			const containerWidth = containerRef.current.offsetWidth;
			const card = containerRef.current.querySelector(
				`[class*="categoryCard"]`
			);
			if (!card) return;

			const gap = 16;
			const cardWidth = card.offsetWidth + gap;

			const visibleCount = Math.floor(containerWidth / cardWidth);
			setVisibleCards(visibleCount);
			setCardWidth(cardWidth);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [categories.length]);

	useEffect(() => {
		if (!containerRef.current || cardWidth === 0) return;
		const container = containerRef.current;

		container.scrollTo({
			left: currentIndex * cardWidth,
			behavior: 'smooth',
		});
	}, [currentIndex, cardWidth]);

	const handleNext = () => {
		if (currentIndex < categories.length - visibleCards - 1) {
			setCurrentIndex(prev => prev + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
		}
	};

	if (loading) return <p>Loading categories...</p>;
	if (error) return <p>Error loading categories: {error.message}</p>;

	return (
		<div className={styles.categoriesWrapper}>
			<div className={styles.categoriesSectionHeader}>
				<h2 className={styles.title}>Browse by category</h2>

				<div className={styles.sliderButtons}>
					<button className={styles.sliderBtn}>
						<ArrowLeft className={styles.sliderIcon} onClick={handlePrev} />
					</button>

					<button className={styles.sliderBtn}>
						<ArrowRight className={styles.sliderIcon} onClick={handleNext} />
					</button>
				</div>
			</div>

			<div className={styles.categoriesList} ref={containerRef}>
				{categories.map(category => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default CategoriesList;
