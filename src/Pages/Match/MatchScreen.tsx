import { DetailsHeader, MatchCard } from 'Components';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stats from './Stats/Stats';
import styles from './MatchScreen.module.scss';
import { matchs } from 'Mocks/matchs.mocks';

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
				<MatchCard data={mockedData} detailed />
				{navigateToTab(location.hash)}
			</div>
		</div>
	);
};

export default MatchScreen;
