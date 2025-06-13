import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

import LoadingPage from '../pages/LoadingPage';

import { pagesConfig } from '../config/pages.config';

export const UserRoute = ({ children }) => {
	const { user, isLoading } = useUser();

	if (isLoading) {
		return <LoadingPage />;
	}

	if (!user) {
		return <Navigate to={pagesConfig.login} replace />;
	}

	return children;
};
