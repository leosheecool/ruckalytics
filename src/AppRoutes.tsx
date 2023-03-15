import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BottomNavBar } from 'Components';

const Home = lazy(() => import('Pages/Home/Home'));
const MatchScreen = lazy(() => import('Pages/Match/MatchScreen'));
const WhiteBoard = lazy(() => import('Pages/WhiteBoard/WhiteBoard'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path="/match/:id" element={<MatchScreen />} />
				<Route path="/whiteboard" element={<WhiteBoard />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<BottomNavBar />
		</Suspense>
	);
};

export default AppRoutes;
