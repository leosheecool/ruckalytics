import { DetailsHeader, MatchCard } from 'Components';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stats from './Stats/Stats';
import styles from './MatchScreen.module.scss';
import { matchs } from 'Mocks/matchs.mocks';
import ReactPlayer from 'react-player';

const MatchScreen = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const mockedData = matchs[0];
	const [videoUrl, setVideoUrl] = useState<string>();

	const tabs = useMemo(
		() => ({
			'#stats': <MatchCard data={mockedData} detailed />,
			'#video': (
				<ReactPlayer
					className="react-player fixed-bottom"
					url={videoUrl}
					width="100%"
					height="100%"
					controls={true}
				/>
			),
		}),
		[mockedData, videoUrl]
	);

	useEffect(() => {
		if (!Object.keys(tabs).includes(location.hash) || !location.hash)
			navigate('#stats', { replace: true });
	}, [location.hash, navigate, tabs]);

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
			<DetailsHeader />
			<div className={styles.container}>
				{/* <ReactPlayer
					className="react-player fixed-bottom"
					url="http://localhost:3000/test.mp4"
					width="100%"
					height="100%"
					controls={true}
				/> */}
				{navigateToTab(location.hash)}
				<Stats stats={mockedData.stats} onActionClick={handleActionClick} activeVideo={videoUrl} />
			</div>
		</div>
	);
};

export default MatchScreen;
