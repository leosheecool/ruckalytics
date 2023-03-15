import styles from './BottomNavBar.module.scss';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdClipboard } from 'react-icons/io';
import { IoStatsChartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Link to="/" className={styles.menu}>
					<HiOutlineHome size={25} />
				</Link>
				<Link to="/whiteboard" className={styles.menu}>
					<IoMdClipboard size={25} />
				</Link>
				<Link to="/" className={styles.menu}>
					<IoStatsChartOutline size={25} />
				</Link>
			</div>
		</div>
	);
};

export default BottomNavBar;
