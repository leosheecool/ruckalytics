import styles from './Home.module.scss';
//components
import { MatchPreviewCard } from '../../Components';
//assets
import FRR from '../../Assets/images/FFRLogo.jpg';
//mocks
import { matchs } from '../../Mocks/matchs.mocks';
const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img src={FRR} alt="FRR Logo" />
				<h1 className={styles.title}>AI-mazzing</h1>
			</div>

			{matchs.map((match) => (
				<MatchPreviewCard key={match.id} data={match} />
			))}
		</div>
	);
};

export default Home;
