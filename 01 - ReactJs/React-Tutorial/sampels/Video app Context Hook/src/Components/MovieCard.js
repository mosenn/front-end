import React from 'react';
import { MovieContorls } from './MovieContorls';

export const MovieCard = ({ Movie, type }) => {
	return (
		<div className="movie-card">
			<div className="overlay"></div>
			{Movie.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
					alt={`${Movie.titile} Poster`}
				></img>
			) : (
				<div className="filler-poster"></div>
			)}
			<MovieContorls type={type} Movie={Movie}></MovieContorls>
		</div>
	);
};
