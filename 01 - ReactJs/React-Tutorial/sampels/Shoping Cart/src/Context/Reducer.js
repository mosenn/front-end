const Reducer = (state, action) => {
	if (action.type === 'Clear-Cart') {
		return { ...state, cart: [] };
	}
	if (action.type === 'REMOVE') {
		return {
			...state,
			cart: state.cart.filter((item) => item.id !== action.payload),
		};
	}
	// INCREASE PRODUCT;
	if (action.type === 'INCREASE') {
		let tempCart = state.cart.map((items) => {
			if (items.id === action.payload) {
				return { ...items, amount: items.amount + 1 };
			}
			return items;
		});
		return {
			...state,
			cart: tempCart,
		};
	}
	// DECREASE PRODUCT
	if (action.type === 'DECREASE') {
		let tempCart = state.cart
			.map((items) => {
				if (items.id === action.payload) {
					return { ...items, amount: items.amount - 1 };
				}
				return items;
			})
			.filter((items) => items.amount !== 0);
		return {
			...state,
			cart: tempCart,
		};
	}
	if (action.type === 'GET_TOTAL') {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				// cartItem === data (hamon data ro dare map mikone engar)
				const { price, amount } = cartItem;
				console.log(price, amount);
				const TotalItems = price * amount;

				cartTotal.total += TotalItems;
				cartTotal.amount += amount;

				return cartTotal;
			},
			// this object = cartTotal
			{
				total: 0,
				amount: 0,
			}
		);
		total = parseFloat(total.toFixed(2));
		return { ...state, total, amount };
	}
	if (action.type === 'LOADING') {
		return { ...state, loading: true };
	}
	if (action.type === 'DISPLAY_ITEMS') {
		return { ...state, cart: action.payload, loading: false };
	}
	return state;
};

export default Reducer;

//  if

// switch

// switch (action.type) {
// 	case 'Clear-Cart':
// 		return { ...state, cart: [] };
// 	case 'REMOVE':
// 		return {
// 			...state,
// 			cart: state.cart.filter((item) => item.id !== action.payload),
// 		};

// 	case 'INCREASE':
// 		let tempCart = state.cart.map((item) => {
// 			if (item.id === action.payload) {
// 				return { ...item, amount: item.amount + 1 };
// 			}
// 			return item;
// 		});
// 		return {
// 			...state,
// 			cart: tempCart,
// 		};
// 	default:
// 		return state;
// }
