import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('Pages/Home/Home'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
