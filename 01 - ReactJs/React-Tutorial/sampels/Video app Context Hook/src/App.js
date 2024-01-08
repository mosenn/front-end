import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './Components/Header';
import { WatchList } from './Components/WatchList';
import { Wacth } from './Components/Wacth';
import { Add } from './Components/Add';
import { GlobalProvider } from './context/Globalstate';
import './lib/font-awesome/css/all.min.css';
import './App.css';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<WatchList />} />
					<Route path="/watched" element={<Wacth />} />
					<Route path="/add" element={<Add />} />
				</Routes>
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
