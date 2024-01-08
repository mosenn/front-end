import './App.css';
import React, { useState, useEffect } from 'react';
import info from './Data';
import { Header } from './Hedaer/Hedaer';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
function App() {
	const [data, Setdata] = useState(info);
	const [index, SetIndex] = useState(0);
	useEffect(() => {
		let lastindex = data.length - 1;
		if (index < 0) {
			SetIndex(lastindex);
		}
		if (index > lastindex) {
			SetIndex(0);
		}
	}, [index, data]);

	return (
		<div className="App">
			<Header></Header>
			<section className="Parent-slider">
				{data.map((items, DataIndex) => {
					const { id, title, name, quote, image } = items;
					let postion = 'NextSlide';
					if (DataIndex === index) {
						postion = 'active';
					}
					if (
						DataIndex === index - 1 ||
						(index === 0 && DataIndex.length - 1)
					) {
						postion = 'PreveSlide';
					}

					return (
						<article key={id} className={postion}>
							<h1>{title}</h1>
							<p>{name}</p>
							<figure>
								<img src={image} alt={name} />
								<figcaption>{quote}</figcaption>
							</figure>
						</article>
					);
				})}
			</section>

			<div className="parent-btns">
				<button
					onClick={() => {
						SetIndex(index - 1);
					}}
				>
					<FaArrowAltCircleLeft />
				</button>
				<button
					onClick={() => {
						SetIndex(index + 1);
					}}
				>
					<FaArrowAltCircleRight />
				</button>
			</div>
		</div>
	);
}

export default App;
