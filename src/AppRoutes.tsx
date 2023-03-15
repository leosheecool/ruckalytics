import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('Pages/Home/Home'));
const MatchScreen = lazy(() => import('Pages/Match/MatchScreen'));
const MatchStatsScreen = lazy(() => import('Pages/Match/Stats/Stats'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path="/match" element={<MatchScreen />}>
					<Route path=":id" element={<MatchStatsScreen />} />
				</Route>
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
