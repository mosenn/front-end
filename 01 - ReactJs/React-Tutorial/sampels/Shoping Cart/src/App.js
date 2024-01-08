import './App.css';
import { CartContainer, Navbar } from './Components/AllComponent';
import { GlobalContext } from './Context/Context';
import { Header } from './Components/Hedaer/Hedaer';
function App() {
	const { loading } = GlobalContext();
	if (loading) {
		return (
			<div>
				<h1>Loading..</h1>
			</div>
		);
	}
	return (
		<div className="App">
			
			<Header></Header>
			<Navbar />
			<CartContainer />
		</div>
	);
}

export default App;
