import MainLayout from '../layouts/MainLayout';

import styles from '../styles/NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<MainLayout>
			<div className={styles.notFoundPage}>
				<h1>404 - Page Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</div>
		</MainLayout>
	);
};

export default NotFoundPage;
