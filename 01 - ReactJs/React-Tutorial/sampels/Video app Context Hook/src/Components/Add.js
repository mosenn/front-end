import React, { useState } from 'react';
import { ResultCard } from './ResultCard';
export const Add = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState('');
	const Handelerinput = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		// console.log(e.target.value);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=28885ce212bd64af1255f3383449d6a2&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data.errors) {
					setResults(data.results);
				} else {
					setResults([]);
				}
			});
	};
	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<form className="input-wrapper">
						<input
							value={query}
							onChange={Handelerinput}
							type="text"
							placeholder="search for a movie"
						></input>
					</form>
					{results.length > 0 && (
						<ul className="results">
							{results.map((movie) => (
								<li key={movie.id}>
									<ResultCard Movie={movie}></ResultCard>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};
