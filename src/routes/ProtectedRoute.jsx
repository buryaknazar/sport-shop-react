import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

import LoadingPage from '../pages/LoadingPage';

import { pagesConfig } from '../config/pages.config';

export const ProtectedRoute = ({ children, requiredRole }) => {
	const { user, isLoading } = useUser();

	if (isLoading) {
		return <LoadingPage />;
	}

	if (!user) {
		return <Navigate to='/login' replace />;
	}

	if (requiredRole && user.role !== requiredRole) {
		return <Navigate to={pagesConfig.home} replace />;
	}

	return children;
};
