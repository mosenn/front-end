import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export const ResultCard = ({ Movie }) => {
	
	const { addMovietoWatchlist, watchlist, watched, addMovieToWatch } =
		useContext(GlobalContext);
	let storeMovie = watchlist.find((o) => o.id === Movie.id);
	let storeMovieWatch = watched.find((o) => o.id === Movie.id);
	const wathlistDisabled = storeMovie ? true : storeMovieWatch ? true : false
	const WatchedDisbaled = storeMovieWatch ? true : false
	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{Movie.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
						alt={`${Movie.titile} Poster`}
					></img>
				) : (
					<div className="filler-poster"></div>
				)}
				<div className="info">
					<div className="header">
						<article>
							<p className="title">
								{Movie.title
									? Movie.title.substring(0, 15)
									: 'No title'}
							</p>
							<h4 className="release-date">
								{Movie.release_date
									? Movie.release_date.substring(0, 4)
									: '-'}
							</h4>
						</article>
					</div>
					{/* start context */}
					<div className="contorls">
						<button
							className="btn"
							disabled={wathlistDisabled}
							onClick={() => addMovietoWatchlist(Movie)}
						>
							add to watch list
						</button>
						<button
							className="btn"
							disabled={WatchedDisbaled}
							onClick={() => addMovieToWatch(Movie)}
						>
							add to watch list
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
