import styles from './InfoSection.module.css';

const InfoSection = ({ title, value, icon }) => {
	return (
		<div className={styles.infoSection}>
			<span className={styles.infoGroup}>
				<span className={styles.icon}>{icon}</span>
				<span className={styles.title}>{title}</span>
			</span>

			<span className={styles.value}>{value}</span>
		</div>
	);
};

export default InfoSection;
