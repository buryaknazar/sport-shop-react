import AppRouter from './routes/AppRouter';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';

const App = () => {
	return (
		<UserProvider>
			<CartProvider>
				<AppRouter />
			</CartProvider>
		</UserProvider>
	);
};

export default App;
