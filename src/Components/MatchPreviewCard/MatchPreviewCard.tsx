import styles from './MatchPreviewCard.module.scss';
//models
import { Match } from 'Models/Match.types';
//libs
import cn from 'classnames';
import dayjs from 'dayjs';

type Props = {
	data: Match;
};
const MatchPreviewCard = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.team}>
				<span>Home</span>
				<img src={data.homeTeam.logo} alt="home team" />
				<h3>{data.homeTeam.name}</h3>
			</div>
			<div className={styles.matchInfos}>
				<span>{dayjs(data.utcDate).format('DD MMM HH:mm')}</span>
				<h3>
					{data.score.homeTeam} - {data.score.visitorTeam}
				</h3>
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
				<img src={data.visitorTeam.logo} alt="visitor team" />
				<h3>{data.visitorTeam.name}</h3>
			</div>
		</div>
	);
};

export default MatchPreviewCard;
