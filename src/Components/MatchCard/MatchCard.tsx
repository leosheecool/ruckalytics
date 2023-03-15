import styles from './MatchCard.module.scss';
import globalStyles from 'Styles/global.module.scss';
//models
import { Match } from 'Models/Match.types';
//libs
import cn from 'classnames';
import dayjs from 'dayjs';

type Props = {
	data: Match;
	detailed?: boolean;
};
const MatchCard = ({ data, detailed: isDetailed }: Props) => {
	return (
		<div className={globalStyles.card}>
			{isDetailed && <p className={styles.location}>{data.location}</p>}
			<div className={styles.scoreContainer}>
				<div className={styles.team}>
					<span>Home</span>
					<img
						src={data.homeTeam.logo}
						className={cn(styles.clubLogo, { [styles.preview]: !!!isDetailed })}
						alt="home team"
					/>
					<h3>{data.homeTeam.name}</h3>
				</div>
				<div className={styles.matchInfos}>
					<span>{dayjs(data.utcDate).format('DD MMM HH:mm')}</span>
					<h3>
						{data.score.homeTeam} - {data.score.visitorTeam}
					</h3>

					{isDetailed && <p className={styles.duration}>{data.duration}'</p>}

					<div
						className={cn(styles.result, {
							[styles.loose]: data.score.homeTeam < data.score.visitorTeam,
						})}
					>
						{data.score.homeTeam > data.score.visitorTeam && <div>Home win</div>}
						{data.score.homeTeam === data.score.visitorTeam && <div>Draw</div>}
						{data.score.homeTeam < data.score.visitorTeam && <div>Home Loose</div>}
					</div>
				</div>
				<div className={styles.team}>
					<span>Visitor</span>
					<img
						src={data.visitorTeam.logo}
						className={cn(styles.clubLogo, { [styles.preview]: !isDetailed })}
						alt="visitor team"
					/>
					<h3>{data.visitorTeam.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default MatchCard;
