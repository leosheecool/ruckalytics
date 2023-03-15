import { GolbalStats } from 'Models/Match.types';
import styles from './Stats.module.scss';
import globalStyles from 'Styles/global.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { secondsToTime } from 'Utils/timeConverter';

type Props = {
	stats: GolbalStats;
};

const TABS = ['Scrums', 'Fouls'];

const Stats = ({ stats }: Props) => {
	const [activeTab, setActiveTab] = useState(TABS[0]);
	return (
		<div className={globalStyles.card}>
			<div className={styles.tabContainer}>
				{TABS.map((tab) => (
					<p
						key={tab}
						className={cn(styles.tab, { [styles.active]: tab === activeTab })}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</p>
				))}
			</div>

			{stats[activeTab.toLowerCase() as keyof GolbalStats]?.map((action) => {
				const timecode = secondsToTime(action.timeCode);
				return (
					<div key={action.timeCode} className={cn(globalStyles.card, styles.card)}>
						<p className={styles.scrum}>{action.description}</p>
						<p className={styles.scrum}>
							{timecode.h}:{timecode.m}:{timecode.s}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Stats;
