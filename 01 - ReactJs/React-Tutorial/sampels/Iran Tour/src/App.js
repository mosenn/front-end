import './App.css';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { Detail } from './pages/Detail/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SocialHeader } from './pages/SocialHeader/SocialHeader';
import { BackHome } from './pages/BackToHomePageTour/BackHome';

function App() {
	return (
		<div className="App">
			<SocialHeader></SocialHeader>

			<BrowserRouter>
			
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/cart" element={<Cart></Cart>}></Route>
					<Route
						path="/detail/:id"
						element={<Detail></Detail>}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
