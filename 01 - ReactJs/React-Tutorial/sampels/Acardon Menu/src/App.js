import './App.css';
import React, { useState } from 'react';
import { Qustion } from './Componet/Qustion';
import { Header } from './Componet/Hedaer/Hedaer';
import data from './data';
function App() {
	const [qustion] = useState(data);
	return (
		<div className="App">
			<Header></Header>
			{qustion.map((items) => {
				return <Qustion key={items.id} {...items}></Qustion>;
			})}
		</div>
	);
}

export default App;
