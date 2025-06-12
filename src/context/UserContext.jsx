import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			try {
				const userData = jwtDecode(storedToken);
				setUser({
					username: userData.sub,
					email: userData.email,
					role: userData.role,
				});
				setToken(storedToken);
			} catch (err) {
				console.error('Invalid token');
				setUser(null);
				setToken(null);
			}
		}
		setIsLoading(false);
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		setToken(null);
	};

	return (
		<UserContext.Provider
			value={{ user, token, setUser, setToken, logout, isLoading }}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
