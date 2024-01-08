import React, { useState } from 'react';
import './App.css';
import Values from 'values.js';
import { SingleColor } from './Component/SingleColor';
import { Header } from './Component/Hedaer/Hedaer';
function App() {
	const [ListColor, SetListColor] = useState(new Values('skyblue').all(21));
	const [value, Setvalue] = useState('');
	const [erorr, SetErorr] = useState(false);
	const OnSumitForm = (e) => {
		e.preventDefault();
		try {
			console.log('submit');
			let colors = new Values(value).all(21);
			SetListColor(colors);
		} catch (erorr) {
			SetErorr(true);
			console.log(erorr);
		}
	};
	return (
		<div className="App">
			<Header></Header>
			<section>
				<form onSubmit={OnSumitForm}>
					<input
						type="text"
						value={value}
						onChange={(e) => {
							Setvalue(e.target.value);
							SetErorr(false);
						}}
					/>
					<button type="submit">Generate</button>

					{erorr ? <p>type name color or #ffff </p> : null}
				</form>

				<div className="container-backgrounds">
					{ListColor.map((items, index) => {
						return (
							<SingleColor
								key={index}
								{...items}
								hexColor={items.hex}
								index={index}
							></SingleColor>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
