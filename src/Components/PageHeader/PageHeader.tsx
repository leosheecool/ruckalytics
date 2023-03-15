import styles from './PageHeader.module.scss';
import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';
import { Header } from 'Components';
import { useNavigate } from 'react-router-dom';

type Props = {
	title?: string;
};

const PageHeader = ({ title = '' }: Props) => {
	const navigate = useNavigate();

	return (
		<div>
			<Header />
			<div className={styles.buttonContainer}>
				<div className={styles.buttonIconContainer} onClick={() => navigate('/')}>
					<FiArrowLeft className={styles.buttonIcon} size={36} />
				</div>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.buttonIconContainer}>
					<FiMoreVertical className={styles.buttonIcon} size={36} />
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
