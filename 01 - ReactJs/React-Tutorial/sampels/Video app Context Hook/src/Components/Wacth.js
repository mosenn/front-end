import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';
import { MovieCard } from './MovieCard';
export const Wacth = () => {
	const { watched } = useContext(GlobalContext);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">you ARe Watched</h1>
					<span className="count-pill">
						{watched.length}
						{watched.length === 1 ? 'Movie' : 'Movies'}
					</span>
				</div>
				{watched.length > 0 ? (
					<div className="movie-grid">
						{watched.map((movie) => (
							<MovieCard Movie={movie} type="watched"></MovieCard>
						))}
					</div>
				) : (
					'You dont Wacth any Movie'
				)}
			</div>
		</div>
	);
};
