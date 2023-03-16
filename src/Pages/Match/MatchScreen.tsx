import { PageHeader, MatchCard } from 'Components';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Stats from './Stats/Stats';
import styles from './MatchScreen.module.scss';
import { matchs } from 'Mocks/matchs.mocks';
import ReactPlayer from 'react-player';
import cn from 'classnames';
import globalStyles from 'Styles/global.module.scss';

const MatchScreen = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const mockedData = matchs[parseInt(id || '0', 10)];
	const [videoUrl, setVideoUrl] = useState<string>();

	const tabs = useMemo(
		() => ({
			'#stats': <MatchCard data={mockedData} detailed />,
			'#video': (
				<ReactPlayer className={styles.player} url={videoUrl} width="100%" controls={true} />
			),
		}),
		[mockedData, videoUrl]
	);

	useEffect(() => {
		if (
			!Object.keys(tabs).includes(location.hash) ||
			!location.hash ||
			(location.hash === '#video' && !videoUrl)
		)
			navigate('#stats', { replace: true });
	}, [location.hash, navigate, tabs, videoUrl]);

	const navigateToTab = (hash: string) => {
		return tabs[hash as keyof typeof tabs];
	};

	const handleActionClick = (url: string) => {
		if (url !== videoUrl) {
			navigate('#video', { replace: true });
			setVideoUrl(url);
			return;
		}
		navigate('#stats', { replace: true });
		setVideoUrl(undefined);
	};

	return (
		<div>
			<PageHeader title="Détails" hasBtns />
			<div className={cn(styles.container, globalStyles.pageContainer)}>
				{navigateToTab(location.hash)}
				<Stats stats={mockedData.stats} onActionClick={handleActionClick} activeVideo={videoUrl} />
			</div>
		</div>
	);
};

export default MatchScreen;
