export default (state, action) => {
	switch (action.type) {
		case 'Showing_POP':
			return {
				...state,
				showpopup: (!state.showpopup),
			};
		default:
			return state;
	}
};
