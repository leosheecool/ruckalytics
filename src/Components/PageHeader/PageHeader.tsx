import styles from './PageHeader.module.scss';
import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';
import { Header } from 'Components';
import { useNavigate } from 'react-router-dom';

type Props = {
	title?: string;
	hasBtns?: boolean;
};

const PageHeader = ({ title = '', hasBtns }: Props) => {
	const navigate = useNavigate();

	return (
		<div>
			<Header />
			<div className={styles.buttonContainer}>
				<div>
					{hasBtns && (
						<div className={styles.buttonIconContainer} onClick={() => navigate('/')}>
							<FiArrowLeft className={styles.buttonIcon} size={36} />
						</div>
					)}
				</div>
				<h1 className={styles.title}>{title}</h1>
				<div>
					{hasBtns && (
						<div className={styles.buttonIconContainer}>
							<FiMoreVertical className={styles.buttonIcon} size={36} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
