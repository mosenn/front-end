import {
	Home,
	Navbar,
	ResponsiveMenu,
	SubMenu,
	Header,
} from './Components/ExportAllComponents';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<ResponsiveMenu />
			<Home />
			<SubMenu />
		</div>
	);
}

export default App;
