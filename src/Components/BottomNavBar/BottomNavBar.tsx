import styles from './BottomNavBar.module.scss';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdClipboard } from 'react-icons/io';
import { IoStatsChartOutline } from 'react-icons/io5';
import { AiOutlineUpload } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const LINKS = [
	{
		path: '/home',
		icon: <HiOutlineHome size={25} />,
	},
	{
		path: '/whiteboard',
		icon: <IoMdClipboard size={25} />,
	},
	{
		path: '/upload',
		icon: <AiOutlineUpload size={25} />,
	},
	{
		path: '/home',
		icon: <IoStatsChartOutline size={25} />,
	},
];

const BottomNavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{LINKS.map((item) => (
					<NavLink
						key={item.path}
						to={item.path}
						className={(status) => cn(styles.menu, { [styles.active]: status.isActive })}
					>
						{item.icon}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default BottomNavBar;
