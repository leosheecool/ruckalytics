import { GolbalStats } from 'Models/Match.types';
import styles from './ActionsTab.module.scss';
import globalStyles from 'Styles/global.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { secondsToTime } from 'Utils/timeConverter';

type Props = {
	stats: GolbalStats;
	onActionClick: (url: string) => void;
	activeVideo?: string;
};

const TABS = [
	{ key: 'global', title: 'Stats' },
	{ key: 'scrums', title: 'Mêlées' },
	{ key: 'fouls', title: 'Fautes' },
];

const ActionsTab = ({ stats, onActionClick: handleActionClick, activeVideo }: Props) => {
	const [activeTab, setActiveTab] = useState(TABS[0]);
	return (
		<div className={globalStyles.card}>
			<div className={styles.tabContainer}>
				{TABS.map((tab) => (
					<p
						key={tab.key}
						className={cn(styles.tab, { [styles.active]: tab.key === activeTab.key })}
						onClick={() => setActiveTab(tab)}
					>
						{tab.title}
					</p>
				))}
			</div>

			{stats[activeTab.key as keyof GolbalStats]?.map((item) => {
				const timecode = secondsToTime(item.timeCode);
				if (activeTab.key === 'global')
					return (
						<div key={item.title}>
							<p className={styles.statsTitle}>{item.title}</p>
							<div className={styles.barChartsContainer}>
								<div className={styles.barChartContainer}>
									<div
										className={cn(styles.barChartBar, styles.left)}
										style={{ width: `${item.homeTeam}%` }}
									/>
									<p className={styles.barChartValue}>
										{item.homeTeam}
										{item.unit}
									</p>
								</div>
								<div className={styles.barChartContainer}>
									<div className={styles.barChartBar} style={{ width: `${item.visitorTeam}%` }} />
									<p className={styles.barChartValue}>
										{item.visitorTeam}
										{item.unit}
									</p>
								</div>
							</div>
						</div>
					);
				return (
					<div
						key={item.timeCode}
						className={cn(globalStyles.card, styles.card, {
							[styles.active]: activeVideo === item.url,
						})}
						onClick={() => handleActionClick(item.url)}
					>
						<p className={styles.scrum}>{item.description}</p>
						<p className={styles.scrum}>
							{timecode.h}:{timecode.m}:{timecode.s}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default ActionsTab;
