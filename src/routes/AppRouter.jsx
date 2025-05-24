import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

import { pagesConfig } from '../config/pages.config';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.catalog} element={<CatalogPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
