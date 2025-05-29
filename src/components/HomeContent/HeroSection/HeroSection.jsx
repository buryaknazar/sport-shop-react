import { Link } from 'react-router-dom';

import { pagesConfig } from '../../../config/pages.config';

import styles from './HeroSection.module.css';

import backgroundImage from '../../../assets/images/home/hero-bg2.png';

const HeroSection = () => {
	return (
		<section className={styles.bgContainer}>
			<div className={styles.bgImage}>
				<img src={backgroundImage} alt='Background' className={styles.image} />
			</div>

			<div className='container'>
				<div className={styles.heroSection}>
					<div className={styles.content}>
						<h1 className={styles.title}>
							Control
							<br />
							the mayhem
						</h1>

						<p className={styles.description}>
							Make sports and the outdoors more accessible
							<br />
							to everyone, everywhere. Your adventure starts here.
						</p>

						<Link
							to={pagesConfig.catalog}
							className={styles.shopBtn}
							title='Shop Now'
						>
							Shop Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
