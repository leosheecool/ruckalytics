import { DetailsHeader } from 'Components';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stats from './Stats/Stats';

const tabs = {
	'#stats': <Stats />,
};

const MatchScreen = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!Object.keys(tabs).includes(location.hash) || !location.hash)
			navigate('#stats', { replace: true });
	}, [location.hash, navigate]);

	const navigateToTab = (hash: string) => {
		return tabs[hash as keyof typeof tabs];
	};

	return (
		<div>
			<DetailsHeader />
			{navigateToTab(location.hash)}
		</div>
	);
};

export default MatchScreen;
