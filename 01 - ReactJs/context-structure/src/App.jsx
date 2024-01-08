import { useState } from 'react';
import { useGlovalcontext } from './context/Context';
import './App.css';
function App() {
	const [count, setCount] = useState(0);
	const { name, ShowPopup, state } = useGlovalcontext();
	console.log(state.showpopup);
	return (
		<div className="App">
			<button
				onClick={() => {
					ShowPopup();
				}}
			>
				click
			</button>
			<span> PopupName-WithContext:</span>
			{state.showpopup && (
				<div>
					{' '}
					<h1>{name}</h1>
				</div>
			)}
		</div>
	);
}

export default App;
