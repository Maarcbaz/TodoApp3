import AppContext from './AppContext';
import { Footer, Form, Header } from './components';

function App() {
	return (
		<>
			<AppContext>
				<Header />
				<Footer />
				<Form />
			</AppContext>
		</>
	);
}

export default App;
