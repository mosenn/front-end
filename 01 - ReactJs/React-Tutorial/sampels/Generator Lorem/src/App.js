import './App.css';
import React, { useState, useEffect } from 'react';
import text from './Data';
import { Header } from './Hedaer/Hedaer';
function App() {
	const [count, SetCount] = useState(1);
	const [data, SetData] = useState([]);
	const [worng, setWorng] = useState();

	const SumbmitFrom = (e) => {
		e.preventDefault();
		let CountTonumb = count;
		SetData(text.slice(0, CountTonumb));
	};

	const Error = () => {
		if (count >= 8) {
			setWorng('we have just 8 lorem ');
		}
	};
	useEffect(() => {
		Error();
	});

	return (
		<div className="App">
			<Header />
			<section>
				<form onSubmit={SumbmitFrom}>
					<input
						type="number"
						name=""
						id=""
						value={count}
						onChange={(e) => {
							let target = e.target.value;
							if (target > 0 && target <= 8) {
								SetCount(target);
							} else {
								SetCount(1);
							}
						}}
					/>

					<button type="submit">Generate</button>
				</form>

				<article>
					{data.map((items, index) => {
						return <p key={index}>{items}</p>;
					})}
				</article>

				<p>{worng}</p>
			</section>
		</div>
	);
}

export default App;
