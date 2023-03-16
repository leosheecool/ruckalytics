import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BottomNavBar } from 'Components';

const Home = lazy(() => import('Pages/Home/Home'));
const MatchScreen = lazy(() => import('Pages/Match/MatchScreen'));
const WhiteBoard = lazy(() => import('Pages/WhiteBoard/WhiteBoard'));
const UploadPage = lazy(() => import('Pages/Upload/UploadPage'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path="/match/:id" element={<MatchScreen />} />
				<Route path="/whiteboard" element={<WhiteBoard />} />
				<Route path="/home" element={<Home />} />
				<Route path="/upload" element={<UploadPage />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
			<BottomNavBar />
		</Suspense>
	);
};

export default AppRoutes;
