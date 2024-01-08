import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ChartComponet } from '../Chart/ChartComponet';
import './detail.css';
export const Detail = () => {
	const [detail, SetDetail] = useState({});
	const state = useSelector((state) => state.dataCoins.value);
	// main data coming from store for set id
	const data = state.stateData;

	// get unic id with hook params
	const id = useParams();
	// console.log(id); // {id: 'razxDUgYGNAdQ'}
	console.log(detail, 'in detail page');
	useEffect(() => {
		const FindeDataForDetail = data.find(
			(itemsId) => String(itemsId.uuid) === String(id.id)
		);

		return SetDetail(FindeDataForDetail);
	}, []);
	// console.log(typeof detail.marketCap);
	// console.log(typeof detail.btcPrice);
	return (
		<div className="container-detail-page">
			<figure>
				<img
					src={detail.iconUrl}
					alt={detail.uuid}
					style={{ width: '100px', height: '100px' }}
				/>
				<figcaption>
					<p style={{ color: detail.color }}>
						Name :{' '}
						<span style={{ color: 'black' }}>{detail.name}</span>{' '}
					</p>

					<span>Rank : </span>
					{detail.rank}
				</figcaption>
			</figure>
			<nav className="nav-detail-page">
				<ul style={{ boxShadow: `2px 2px 15px ${detail.color}` }}>
					<li>
						<span>market cap : </span>
						{detail.marketCap}
					</li>
					<li>
						<span>change : </span>
						{detail.change}
					</li>
					<li>
						<span>BTC Price : </span>
						0.0{detail.btcPrice}
					</li>
					<li>
						<span>listedAt : </span>
						{detail.listedAt}
					</li>
					<li>
						{' '}
						<span>Lowe Volume : </span>
						{detail.lowVolume ? detail.lowVolume : 'false'}
					</li>
					<li>
						<span>Tier : </span>
						{detail.tier}
					</li>
				</ul>
				<button className="btn-detail">
					<a href={detail.coinrankingUrl} target="_blank">
						Coin Ranking main website
					</a>
				</button>
			</nav>

			<ChartComponet coinsDetail={detail}></ChartComponet>
		</div>
	);
};
