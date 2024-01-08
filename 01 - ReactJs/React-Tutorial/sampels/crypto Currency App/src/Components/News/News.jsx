import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../Loading/Loading';
import './style.css';
export const News = () => {
	const [getData, setGetdata] = useState([]);
	const [optionValue, SetOptionValue] = useState('ethereum');
	const [loadingNews, SetLoadingNews] = useState(true);

	const state = useSelector((state) => state.dataCoins.value);

	const coinsData = state.stateData;

	// loadingfucntion
	const loadginNewsFun = () => {
		SetLoadingNews(false);
		setTimeout(() => {
			SetLoadingNews(true);
		}, 3100);
	};

	// get data
	useEffect(async () => {
		let data = await axios.get(
			`https://newsapi.org/v2/everything?q=${optionValue}&apiKey=2c324d939e0d4645b32d17c4902ac9aa`
		);
		setGetdata(data.data.articles);
	}, [optionValue]);
	// console.log(getData);
	return (
		<section className="wrapper-news">
			<form>
				<h3
					style={{
						borderTop: '1px solid gray',

						padding: '15px',
					}}
				>
					selcet your coins and get news
				</h3>
				<select
					onInput={(e) => {
						// console.log(e.target.value);
						SetOptionValue(e.target.value);
						loadginNewsFun();
					}}
				>
					{coinsData.slice(0, 10).map((items, index) => {
						const { name } = items;
						return <option key={index}> {name}</option>;
					})}
				</select>
			</form>
			<div className="title-news">
				<h3>Coins News</h3>
			</div>
			<div className="container-data-news">
				{loadingNews ? (
					getData.slice(0, 5).map((items, index) => {
						const { author, urlToImage, description, title, url } =
							items;

						const desc = description.substring(0, 20);
						// console.log(items);
						return (
							<div key={index} className="data-news">
								<h5>{title.substr(0, 15)}</h5>

								{urlToImage ? (
									<a href={url}>
										<figure>
											<img
												lazy="true"
												src={urlToImage}
												alt={author}
											/>
											<figcaption>
												<small>
													{desc}
													...
												</small>
											</figcaption>
										</figure>
									</a>
								) : (
									<p>no img</p>
								)}
								<div className="read-more">
									<a href={url}>read more</a>
								</div>
							</div>
						);
					})
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
};
