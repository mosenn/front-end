import { Home } from './Components/HomeCom/Home';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './Components/Detail/Detail';
import { Menu } from './Components/Menu/Menu';
import { Footer } from './Components/Footer/Footer';
function App() {
	return (
		<div className="App">
			<Menu></Menu>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					<Route path="/detail/:id" element={<Detail />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
