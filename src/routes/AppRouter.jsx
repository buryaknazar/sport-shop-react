import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import LoginPage from '../pages/Authentication/LoginPage';

import { pagesConfig } from '../config/pages.config';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.catalog} element={<CatalogPage />} />
				<Route path={pagesConfig.login} element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
