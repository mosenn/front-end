import './App.css';
import { Sidebar } from './Components/Sidebar';
import { ToggelBtn } from './Components/ToggelBtn';
import { Modals } from './Components/Modal';
import { Header } from './Components/Hedaer/Hedaer';
function App() {
	return (
		<div className="App">
			<Header></Header>
			<Sidebar />
			<ToggelBtn />
			<Modals />
		</div>
	);
}

export default App;
