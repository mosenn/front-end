import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../Search/Search';
import { Link } from 'react-router-dom';
import { News } from '../News/News';
import { TopFive } from '../TopFiveCom/TopFive';
import './style.css';
import { Total } from '../TotalComponet/Total';

export const Home = () => {
	const state = useSelector((state) => state.dataCoins.value);
	const data = state.stateData;

	const [size, SetSize] = useState('10');
	const [toggelSearchComponent, SetToggelSearchComponent] = useState(false);

	const SearchFun = () => {
		let searcData = data;
		searcData = searcData.filter((items) =>
			items.name.toLowerCase().includes(state.Searchquery)
		);
		return searcData;
	};

	return (
		<section className="parent-home-componet">
			{data ? (
				<section>
					<Total />
					<TopFive data={data} />
					{/* {toggelSearchComponent && <Search />} */}
					<Search />
					<section className="maping-data-home">
						{SearchFun()
							.slice(0, size)
							.map((Coins) => {
								const { name, iconUrl, color, uuid } = Coins;
								return (
									<div key={uuid} style={{ color: color }}>
										<h5>{name.substring(0, 11)}</h5>
										<figure>
											<img
												src={iconUrl}
												alt={iconUrl}
												style={{
													width: '50px',
													height: '50px',
												}}
											/>
										</figure>
										<Link to={`/detail/${uuid}`}>
											detail
										</Link>
									</div>
								);
							})}
					</section>
					<button
						onClick={() => {
							size === '10' ? SetSize('50') : SetSize('10');
							SetToggelSearchComponent(!toggelSearchComponent);
						}}
					>
						{size === '10' ? 'Show More' : 'Less More'}
					</button>
					<div>
						<News />
					</div>
				</section>
			) : (
				<h1>Someting Worng</h1>
			)}
		</section>
	);
};
