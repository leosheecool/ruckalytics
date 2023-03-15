import styles from './DetailsHeader.module.scss';
import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';
import { Header } from 'Components';

const DetailsHeader = () => {
	return (
		<div>
			<Header />
			<div className={styles.buttonContainer}>
				<div className={styles.buttonIconContainer}>
					<FiArrowLeft className={styles.buttonIcon} size={36} />
				</div>
				<div className={styles.buttonIconContainer}>
					<FiMoreVertical className={styles.buttonIcon} size={36} />
				</div>
			</div>
		</div>
	);
};

export default DetailsHeader;
