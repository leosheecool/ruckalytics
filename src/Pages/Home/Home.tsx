import styles from './Home.module.scss';
//components
import { MatchCard } from 'Components';
//mocks
import { matchs } from 'Mocks/matchs.mocks';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>AI-mazzing</h1>

			<div className={styles.MatchPreviewCardContainer}>
				{matchs.map((match, index) => (
					<MatchCard key={match.id} data={match} onClick={() => navigate(`/match/${index}`)} />
				))}
			</div>
		</div>
	);
};

export default Home;
