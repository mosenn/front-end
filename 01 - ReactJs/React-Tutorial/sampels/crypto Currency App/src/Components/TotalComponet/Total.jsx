import React from 'react';
import { useSelector } from 'react-redux';
import './total.css';
export const Total = () => {
	const state = useSelector((state) => state.dataCoins.value);
	console.log(state.totalData, 'in top five componet');
	const statsData = state.totalData;

	return (
		<nav className="total-nav">
			<h3>Total Coins</h3>
			<ul>
				<li>
					<span>Total : </span>
					{statsData.total}
				</li>
				<li>
					<span>Volume : </span>
					{statsData.total24hVolume.substring(2, 5)}
				</li>
				<li>
					<span>Coins : </span>
					{statsData.totalCoins}
				</li>
				<li>
					<span>ExChange : </span>
					{statsData.totalExchanges}
				</li>

				<li>
					<span>MarketCap : </span>
					{statsData.totalMarketCap.substring(0, 5)}
				</li>
				<li>
					<span> Markets : </span>
					{statsData.totalMarkets}
				</li>
			</ul>
		</nav>
	);
};
