import './App.css';

import { RenderMapSearchInput } from './Components/RenderMapAndSerchInput/RenderMapSearchInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route
						path="/map"
						element={<RenderMapSearchInput />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
