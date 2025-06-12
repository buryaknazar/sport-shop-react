import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CartPage from '../pages/CartPage/CartPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import LoginPage from '../pages/Authentication/LoginPage';
import RegisterPage from '../pages/Authentication/RegisterPage';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import CategoriesPage from '../pages/Admin/EntitiesPages/CategoriesPage';
import UsersPage from '../pages/Admin/EntitiesPages/UsersPage';
import ManufacturersPage from '../pages/Admin/EntitiesPages/ManufacturersPage';
import ColorsPage from '../pages/Admin/EntitiesPages/ColorsPage';
import ProductsPage from '../pages/Admin/EntitiesPages/ProductsPage';

import { pagesConfig } from '../config/pages.config';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.catalog} element={<CatalogPage />} />
				<Route path={pagesConfig.cart} element={<CartPage />} />
				<Route path={pagesConfig.checkout} element={<CheckoutPage />} />
				<Route path={pagesConfig.login} element={<LoginPage />} />
				<Route path={pagesConfig.register} element={<RegisterPage />} />
				<Route path='*' element={<NotFoundPage />} />

				<Route
					path={pagesConfig.admin}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<AdminDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path={pagesConfig.adminCategories}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<CategoriesPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path={pagesConfig.adminUsers}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<UsersPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path={pagesConfig.adminManufacturers}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<ManufacturersPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path={pagesConfig.adminProducts}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<ProductsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path={pagesConfig.adminColors}
					element={
						<ProtectedRoute requiredRole='ADMIN'>
							<ColorsPage />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
