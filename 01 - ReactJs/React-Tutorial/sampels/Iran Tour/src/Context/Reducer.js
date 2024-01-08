export const Reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [
					...state.cart,
					...state.Data.filter(
						(items) => items.id === action.payload
					),
				],
			};
		case 'Remove_Cart':
			return {
				...state,
				cart: state.cart.filter((items) => items.id !== action.payload),
			};
		case 'INC':
			let mapingData = state.cart.map((items) => {
				if (items.id === action.payload) {
					return { ...items, amount: items.amount + 1 };
				}
				return items;
			});
			return { ...state, cart: mapingData };

		case 'DES':
			let mapingDAta = state.cart
				.map((items) => {
					if (items.id === action.payload) {
						return {
							...items,
							amount: items.amount - 1,
						};
					}
					return items;
				})
				.filter((items) => items.amount !== 0);

			return { ...state, cart: mapingDAta };
		case 'Search':
			return {
				...state,
				SearchValue: action.payload,
			};
		case 'Sort_Ticket_Price':
			return {
				...state,
				sort: action.payload,
			};
		default:
			return state;
	}
};
