import styles from './DetailsHeader.module.scss';
import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';
import { Header } from 'Components';
import { useNavigate } from 'react-router-dom';

const DetailsHeader = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Header />
			<div className={styles.buttonContainer}>
				<div className={styles.buttonIconContainer} onClick={() => navigate('/')}>
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
