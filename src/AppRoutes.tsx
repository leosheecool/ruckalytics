import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('Pages/Home/Home'));
const MatchScreen = lazy(() => import('Pages/Match/MatchScreen'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path="/match/:id" element={<MatchScreen />}></Route>
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
