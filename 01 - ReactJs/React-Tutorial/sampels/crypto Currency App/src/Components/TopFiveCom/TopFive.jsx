import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
export const TopFive = ({ data }) => {

	return (
		<section className="parrent-top-bitcoins">
			<header>
				<h2>Top Five Crypto Coins</h2>
			</header>
			<div className="topFiveBit-Coins">
				{data.slice(0, 5).map((items) => {
					const {
						name,
						marketCap,
						iconUrl,
						rank,
						change,
						color,
						btcPrice,
						uuid,
					} = items;

					return (
						<div style={{ color: `${color}` }} key={uuid}>
							<p>{name}</p>
							<figure>
								<img
									src={iconUrl}
									alt={iconUrl}
									style={{ width: '50px', height: '50px' }}
								/>
								<figcaption>Rank : {rank}</figcaption>
							</figure>
							<p>
								<span>BTC Price : </span>
								{btcPrice.substring(5, 20)}
							</p>
							<p>
								<span>Market Cap : </span>
								{marketCap}
							</p>
							<p>
								<span>Change : </span>
								{change}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
