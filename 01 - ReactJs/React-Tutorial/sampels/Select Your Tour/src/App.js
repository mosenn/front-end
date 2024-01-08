import './App.css';
import { useEffect, useState } from 'react';
import { MapTour } from './Components/MapTour';
import { LOADING } from './Components/LOADING';
import { Button, Box } from '@mui/material';
import { Header } from './Components/Hedaer/Hedaer';
const url = 'https://course-api.com/react-tours-project';

function App() {
	const [UrlData, SetUrlData] = useState([]);
	const [Loading, setLoading] = useState(true);

	const TakeDataUrl = async () => {
		setLoading(true);
		try {
			const Fecthing = await fetch(url);
			const response = await Fecthing.json();
			SetUrlData(response);

			setTimeout(() => {
				setLoading(false);
			}, 3000);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		TakeDataUrl();
	}, []);

	const RemoveTour = (id) => {
		const DeleteTours = UrlData.filter((tours) => tours.id !== id);
		SetUrlData(DeleteTours);
	};
	if (Loading) {
		return <LOADING></LOADING>;
	}
	if (UrlData.length === 0) {
		return (
			<div className="reload-page">
				<Box
					component="div"
					sx={{
						borderRadius: '5px',
						display: 'flex',
						justifyContent: 'center',
						border: '1px solid grey',
						width: '50%',
						p: '15px',
						color: 'white',
						backgroundColor: '#9b075f',
					}}
				>
					<h1>You did remove all tours</h1>
				</Box>

				<Button
					color="primary"
					variant="outlined"
					onClick={TakeDataUrl}
					style={{ fontWeight: 'bold' }}
				>
					Reload Tours
				</Button>
			</div>
		);
	}

	return (
		<div className="App">
			<Header />
			<h1>Tour App</h1>
			<MapTour data={UrlData} removetour={RemoveTour}></MapTour>
		</div>
	);
}

export default App;
