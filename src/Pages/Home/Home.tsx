import styles from './Home.module.scss';
//components
import { MatchCard, PageHeader } from 'Components';
//mocks
import { matchs } from 'Mocks/matchs.mocks';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import globalStyles from 'Styles/global.module.scss';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<PageHeader title="Accueil" />

			<div className={cn(styles.container, globalStyles.pageContainer)}>
				{/* <h1 className={styles.title}>AI-mazzing</h1> */}

				<div className={styles.MatchPreviewCardContainer}>
					{matchs.map((match, index) => (
						<MatchCard
							key={match.id}
							data={match}
							onClick={() => navigate(`/match/${index}`)}
							detailed={index === 0}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
