import styles from './MatchPreviewCard.module.scss';
import { Match } from 'Models/Match.types';
type Props = {
	data: Match;
};
const MatchPreviewCard = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.team}>home</div>
			<div className={styles.matchInfos}>info</div>
			<div className={styles.team}>visitor</div>
		</div>
	);
};

export default MatchPreviewCard;
