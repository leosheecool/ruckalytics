import styles from './StatsMenu.module.scss';
import cn from 'classnames';
import { GlobalGameStats } from 'Models/Match.types';

type Props = {
	stats: GlobalGameStats[];
};

const StatsMenu = ({ stats }: Props) => {
	return (
		<>
			{stats.map((item) => (
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
			))}
		</>
	);
};

export default StatsMenu;
