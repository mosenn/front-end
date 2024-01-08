import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export const MovieContorls = ({ Movie, type }) => {
	const {
		removeMovieFromWatchList,
		addMovieToWatch,
		moveToWatchList,
		RemoveWatchedMovie,
	} = useContext(GlobalContext);

	return (
		<div className="inner-card-contolrls">
			{type === 'watchlist' && (
				<>
					<button
						className="ctrl-btn"
						onClick={() => addMovieToWatch(Movie)}
					>
						<i className="fa-fw far fa-eye"></i>
					</button>

					<button
						className="ctrl-btn"
						onClick={() => removeMovieFromWatchList(Movie.id)}
					>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</>
			)}
			{type === 'watched' && (
				<>
					<button
						className="ctrl-btn"
						onClick={() => moveToWatchList(Movie)}
					>
						<i className="fa-fw far fa-eye-slash"></i>
					</button>

					<button
						className="ctrl-btn"
						onClick={() => RemoveWatchedMovie(Movie.id)}
					>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</>
			)}
		</div>
	);
};
