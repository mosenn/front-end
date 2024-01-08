import './App.css';
import React, { useState, useEffect } from 'react';
import { ShowData } from './Components/ShowData';
import { SpinnerDiamond } from 'spinners-react';
import { Header } from './Components/Hedaer/Hedaer';
function App() {
	const [data, setData] = useState([]);
	const [Loading, setLoading] = useState(true);

	const url = 'https://course-api.com/react-tabs-project';

	const FetchFunction = async () => {
		const response = await fetch(url);
		const getData = await response.json();
		setData(getData);
		setLoading(false);
	};

	useEffect(() => {
		FetchFunction();
	}, []);

	if (Loading) {
		return (
			<div className="Loading">
				<h1>
					<SpinnerDiamond
						size={190}
						thickness={180}
						speed={100}
						color="rgba(65, 57, 172, 0.56)"
						secondaryColor="rgba(57, 168, 172, 1)"
					/>
				</h1>
			</div>
		);
	}

	return (
		<div className="App">
			<Header></Header>
			{data.map((items) => {
				return <ShowData {...items} />;
			})}
		</div>
	);
}

export default App;
