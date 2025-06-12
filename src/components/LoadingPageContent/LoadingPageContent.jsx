import styles from './LoadingPageContent.module.css';

const LoadingPageContent = () => {
	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default LoadingPageContent;
