import { GolbalStats } from 'Models/Match.types';
import styles from './Stats.module.scss';
import globalStyles from 'Styles/global.module.scss';
import cn from 'classnames';

type Props = {
	stats: GolbalStats;
};

const Stats = ({ stats }: Props) => {
	return (
		<div className={globalStyles.card}>
			<p className={styles.scrumTitle}>Scrums</p>
			{stats.scrum.map((scrum, index) => (
				<div key={index} className={cn(globalStyles.card, styles.card)}>
					<p className={styles.scrum}>{scrum.description}</p>
					<p className={styles.scrum}>{scrum.timeCode}</p>
				</div>
			))}
			<p className={styles.scrumTitle}>Foul</p>
			{stats.foul.map((foul, index) => (
				<div key={index} className={cn(globalStyles.card, styles.card)}>
					<p className={styles.scrum}>{foul.timeCode}</p>
				</div>
			))}
		</div>
	);
};

export default Stats;
