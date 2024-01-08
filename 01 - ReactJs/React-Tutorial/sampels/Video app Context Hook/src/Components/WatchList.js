/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';
import { MovieCard } from './MovieCard';
export const WatchList = () => {
	const { watchlist } = useContext(GlobalContext);
	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">My Watchlist</h1>
					<span className="count-pill">
						{watchlist.length}
						{watchlist.length === 1 ? 'Movie' : 'Movies'}
					</span>
				</div>
				{watchlist.length > 0 ? (
					<div className="movie-grid">
						{watchlist.map((movie) => (
							<MovieCard
								Movie={movie}
								type="watchlist"
							></MovieCard>
						))}
					</div>
				) : (
					'You dont Wacth any Movie'
				)}
			</div>
		</div>
	);
};
