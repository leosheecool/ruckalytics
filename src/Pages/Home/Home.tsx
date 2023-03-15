import styles from './Home.module.scss';
//components
import { MatchCard } from 'Components';
//mocks
import { matchs } from 'Mocks/matchs.mocks';
const Home = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>AI-mazzing</h1>

			<div className={styles.MatchPreviewCardContainer}>
				{matchs.map((match) => (
					<MatchCard key={match.id} data={match} />
				))}
			</div>
		</div>
	);
};

export default Home;
