import { useEffect } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { useManufacturers } from '../../../hooks/useManufacturers';
import { useColors } from '../../../hooks/useColors';

import Select from 'react-select';
import PriceRangeSlider from './PriceRangeSlider/PriceRangeSlider';

import styles from './FilterSection.module.css';

const PRICE_MIN = 0;
const PRICE_MAX = 1000;

const sizeOptions = [
	{ value: 'S', label: 'S' },
	{ value: 'M', label: 'M' },
	{ value: 'L', label: 'L' },
	{ value: 'XL', label: 'XL' },
	{ value: 'XXL', label: 'XXL' },
];

const FilterSection = ({ filters, setFilters }) => {
	const { categories, fetchCategoriesData } = useCategories();
	const { manufacturers, fetchManufacturersData } = useManufacturers();
	const { colors, fetchColorsData } = useColors();

	useEffect(() => {
		fetchCategoriesData();
		fetchManufacturersData();
		fetchColorsData();
	}, []);

	useEffect(() => {
		console.log('Current filters:', filters);
	}, [filters]);

	const categoryOptions = categories.map(cat => ({
		value: cat.id,
		label: cat.name,
	}));

	const manufacturersOptions = manufacturers.map(man => ({
		value: man.id,
		label: man.name,
	}));

	const colorsOptions = colors.map(man => ({
		value: man.id,
		label: man.name,
	}));

	return (
		<div className={styles.filtersSectionContainer}>
			<form className={styles.filterForm}>
				<div className={styles.filterGroup}>
					<div className={styles.filterItem}>
						<Select
							options={categoryOptions}
							value={
								categoryOptions.find(opt => opt.value === filters.categoryId) ||
								null
							}
							onChange={selectedOption =>
								setFilters({
									...filters,
									categoryId: selectedOption?.value || '',
								})
							}
							styles={{
								control: base => ({
									...base,
									borderColor: 'var(--filter-section-border-color)',
									backgroundColor: 'transparent',
									color: 'var(--text-color)',
								}),
								singleValue: base => ({
									...base,
									color: 'var(--text-color)',
								}),
								menu: base => ({
									...base,
									backgroundColor: 'var(--background-color)',
								}),
								option: (base, state) => ({
									...base,
									backgroundColor: state.isFocused
										? 'var(--highlight-color)'
										: 'transparent',
									color: 'var(--text-color)',
								}),
							}}
							isClearable
							placeholder='Select category'
						/>
					</div>
				</div>

				<div className={styles.filterGroup}>
					<div className={styles.filterItem}>
						<Select
							options={sizeOptions}
							value={
								sizeOptions.find(opt => opt.value === filters.size) || null
							}
							onChange={selectedOption =>
								setFilters({
									...filters,
									size: selectedOption?.value || '',
								})
							}
							styles={{
								control: base => ({
									...base,
									borderColor: 'var(--filter-section-border-color)',
									backgroundColor: 'transparent',
									color: 'var(--text-color)',
								}),
								singleValue: base => ({
									...base,
									color: 'var(--text-color)',
								}),
								menu: base => ({
									...base,
									backgroundColor: 'var(--background-color)',
								}),
								option: (base, state) => ({
									...base,
									backgroundColor: state.isFocused
										? 'var(--highlight-color)'
										: 'transparent',
									color: 'var(--text-color)',
								}),
							}}
							isClearable
							placeholder='Select size'
						/>
					</div>
				</div>

				<div className={styles.filterGroup}>
					<div className={styles.filterItem}>
						<Select
							options={manufacturersOptions}
							value={
								manufacturersOptions.find(
									opt => opt.value === filters.manufacturerId
								) || null
							}
							onChange={selectedOption =>
								setFilters({
									...filters,
									manufacturerId: selectedOption?.value || '',
								})
							}
							styles={{
								control: base => ({
									...base,
									borderColor: 'var(--filter-section-border-color)',
									backgroundColor: 'transparent',
									color: 'var(--text-color)',
								}),
								singleValue: base => ({
									...base,
									color: 'var(--text-color)',
								}),
								menu: base => ({
									...base,
									backgroundColor: 'var(--background-color)',
								}),
								option: (base, state) => ({
									...base,
									backgroundColor: state.isFocused
										? 'var(--highlight-color)'
										: 'transparent',
									color: 'var(--text-color)',
								}),
							}}
							isClearable
							placeholder='Select manufacturer'
						/>
					</div>
				</div>

				<div className={styles.filterGroup}>
					<div className={styles.filterItem}>
						<Select
							options={colorsOptions}
							value={
								colorsOptions.find(opt => opt.value === filters.colorId) || null
							}
							onChange={selectedOption =>
								setFilters({
									...filters,
									colorId: selectedOption?.value || '',
								})
							}
							styles={{
								control: base => ({
									...base,
									borderColor: 'var(--filter-section-border-color)',
									backgroundColor: 'transparent',
									color: 'var(--text-color)',
								}),
								singleValue: base => ({
									...base,
									color: 'var(--text-color)',
								}),
								menu: base => ({
									...base,
									backgroundColor: 'var(--background-color)',
								}),
								option: (base, state) => ({
									...base,
									backgroundColor: state.isFocused
										? 'var(--highlight-color)'
										: 'transparent',
									color: 'var(--text-color)',
								}),
							}}
							isClearable
							placeholder='Select color'
						/>
					</div>
				</div>

				<div className={styles.filterGroup}>
					<PriceRangeSlider
						values={[filters.minPrice || 0, filters.maxPrice || 1000]}
						setValues={([min, max]) =>
							setFilters({ ...filters, minPrice: min, maxPrice: max })
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default FilterSection;
