import styles from './TabBarMenu.module.scss';
import globalStyles from 'Styles/global.module.scss';
import cn from 'classnames';
import ActionsMenu from '../ActionsMenu/ActionsMenu';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { matchs } from 'Mocks/matchs.mocks';
import ReactPlayer from 'react-player';
import { MatchCard } from 'Components';
import StatsMenu from '../StatsMenu/StatsMenu';

const TABS = [
	{ key: 'global', title: 'Statistiques' },
	{ key: 'actions', title: 'Actions' },
	{ key: 'lineup', title: 'Composition' },
	// { key: 'scrums', title: 'Mêlées' },
	// { key: 'fouls', title: 'Fautes' },
];

const TabBarMenu = () => {
	const [activeTab, setActiveTab] = useState(TABS[0]);
	const [videoUrl, setVideoUrl] = useState<string>();
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const mockedData = matchs[parseInt(id || '0', 10)];

	const tabs = useMemo(
		() => ({
			'#stats': <MatchCard data={mockedData} detailed />,
			'#video': (
				<ReactPlayer
					playing={true}
					className={styles.player}
					url={videoUrl}
					width="100%"
					controls={true}
				/>
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

	const handleTabMenu = (tab: typeof TABS[0]) => {
		if (tab.key !== 'actions') setVideoUrl(undefined);
		setActiveTab(tab);
	};

	return (
		<>
			{navigateToTab(location.hash)}

			<div className={globalStyles.card}>
				<div className={styles.tabContainer}>
					{TABS.map((tab) => (
						<p
							key={tab.key}
							className={cn(styles.tab, { [styles.active]: tab.key === activeTab.key })}
							onClick={() => handleTabMenu(tab)}
						>
							{tab.title}
						</p>
					))}
				</div>

				{activeTab.key === 'global' && <StatsMenu stats={mockedData.stats.global} />}

				{activeTab.key === 'actions' && (
					<ActionsMenu
						actions={mockedData.stats.actions}
						onActionClick={handleActionClick}
						activeVideo={videoUrl}
					/>
				)}
			</div>
		</>
	);
};

export default TabBarMenu;
