import { PageHeader } from 'Components';
import styles from './MatchScreen.module.scss';
import cn from 'classnames';
import globalStyles from 'Styles/global.module.scss';
import TabBarMenu from './TabBarMenu/TabBarMenu';

const MatchScreen = () => {
	return (
		<div>
			<PageHeader title="Détails" hasBtns />
			<div className={cn(styles.container, globalStyles.pageContainer)}>
				<TabBarMenu />
			</div>
		</div>
	);
};

export default MatchScreen;
