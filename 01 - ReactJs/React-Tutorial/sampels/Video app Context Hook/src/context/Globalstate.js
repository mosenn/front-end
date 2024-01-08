// get data for Any compontents
import AppReducer from './AppReducer';
import React, { createContext, useReducer, useEffect } from 'react';
// initial state
const initialState = {
	watchlist: localStorage.getItem('watchlist')
		? JSON.parse(localStorage.getItem('watchlist'))
		: [],
	watched: localStorage.getItem('watched')
		? JSON.parse(localStorage.getItem('watched'))
		: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide componets;
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
		localStorage.setItem('watched', JSON.stringify(state.watched));
	}, [state]);

	// action
	const addMovietoWatchlist = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
	};

	const removeMovieFromWatchList = (id) => {
		dispatch({ type: 'Remove_Movie_From_WATCHLIST', payload: id });
	};

	const addMovieToWatch = (movie) => {
		dispatch({ type: 'Movie_to_Watch', payload: movie });
	};

	const moveToWatchList = (movie) => {
		dispatch({ type: 'Move_to_WatchList', payload: movie });
	};

	const RemoveWatchedMovie = (id) => {
		dispatch({ type: 'Remove_Watch_movie', payload: id });
	};
	//
	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMovietoWatchlist,
				removeMovieFromWatchList,
				addMovieToWatch,
				moveToWatchList,
				RemoveWatchedMovie,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
