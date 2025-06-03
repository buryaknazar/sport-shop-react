import React from 'react';
import { Range } from 'react-range';
import styles from './PriceRangeSlider.module.css';

const STEP = 1;
const MIN = 0;
const MAX = 1000;

const PriceRangeSlider = ({ values, setValues }) => {
	return (
		<div className={styles.sliderWrapper}>
			<Range
				values={values}
				step={STEP}
				min={MIN}
				max={MAX}
				onChange={setValues}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '6px',
							background: 'linear-gradient(to right, #ccc, #007bff, #ccc)',
							borderRadius: '3px',
							margin: '1rem 0',
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props, index }) => {
					const { key, ...restProps } = props;
					return (
						<div
							key={key}
							{...restProps}
							style={{
								...restProps.style,
								height: '20px',
								width: '20px',
								backgroundColor: '#007bff',
								borderRadius: '50%',
								boxShadow: '0 0 2px rgba(0,0,0,0.3)',
							}}
						/>
					);
				}}
			/>
			<div className={styles.values}>
				<span>${values[0]}</span> — <span>${values[1]}</span>
			</div>
		</div>
	);
};

export default PriceRangeSlider;
