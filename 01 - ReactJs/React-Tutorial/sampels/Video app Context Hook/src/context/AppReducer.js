// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case 'ADD_MOVIE_TO_WATCHLIST':
			return {
				...state,
				watchlist: [action.payload, ...state.watchlist],
			};
		case 'Remove_Movie_From_WATCHLIST':
			return {
				...state,
				watchlist: state.watchlist.filter(
					(filterMovie) => filterMovie.id !== action.payload
				),
			};
		case 'Movie_to_Watch':
			return {
				...state,
				watchlist: state.watchlist.filter(
					(filterMovie) => filterMovie.id !== action.payload.id
				),
				watched: [action.payload, ...state.watched],
			};
		case 'Move_to_WatchList':
			return {
				...state,
				watched: state.watched.filter(
					(movie) => movie.id !== action.payload.id
				),
				watchlist: [action.payload, ...state.watchlist],
			};

		case 'Remove_Watch_movie':
			return {
				...state,
				watched: state.watched.filter(
					(movie) => movie.id !== action.payload
				),
			};
		default:
			return state;
	}
};
