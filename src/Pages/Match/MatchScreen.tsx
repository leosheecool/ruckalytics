import { DetailsHeader } from 'Components';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stats from './Stats/Stats';
import styles from './MatchScreen.module.scss';
import globalStyles from 'Styles/global.module.scss';
import { matchs } from 'Mocks/matchs.mocks';
import cn from 'classnames';

const MatchScreen = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const mockedData = matchs[0];
	const tabs = useMemo(
		() => ({
			'#stats': <Stats stats={mockedData.stats} />,
		}),
		[mockedData]
	);

	useEffect(() => {
		if (!Object.keys(tabs).includes(location.hash) || !location.hash)
			navigate('#stats', { replace: true });
	}, [location.hash, navigate, tabs]);

	const navigateToTab = (hash: string) => {
		return tabs[hash as keyof typeof tabs];
	};

	return (
		<div>
			<DetailsHeader />
			<div className={styles.container}>
				<div className={globalStyles.card}>
					<p className={cn(styles.globalInformation, styles.location)}>{mockedData.location}</p>
					<p className={styles.globalInformation}>{mockedData.utcDate}</p>
					<div className={styles.scoreContainer}>
						<div>
							<img src={mockedData.homeTeam.logo} alt="club" className={styles.clubLogo} />
							<p className={styles.clubName}>{mockedData.homeTeam.name}</p>
						</div>
						<div>
							<p className={styles.score}>
								{mockedData.score.homeTeam} : {mockedData.score.visitorTeam}{' '}
							</p>
							<p className={styles.duration}>{mockedData.duration}'</p>
						</div>
						<div>
							<img src={mockedData.visitorTeam.logo} alt="club" className={styles.clubLogo} />
							<p className={styles.clubName}>{mockedData.visitorTeam.name}</p>
						</div>
					</div>
				</div>
				{navigateToTab(location.hash)}
			</div>
		</div>
	);
};

export default MatchScreen;
