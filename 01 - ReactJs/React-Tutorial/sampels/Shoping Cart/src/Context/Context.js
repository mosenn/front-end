import React, {
	useContext,
	useState,
	createContext,
	useReducer,
	useEffect,
} from 'react';

// import data from '../data';
import Reducer from './Reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialstate = {
	loading: false,
	cart: [],
	total: 0,
	amount: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialstate);

	const ClearCart = () => {
		dispatch({ type: 'Clear-Cart' });
	};

	const Removeitem = (id) => {
		dispatch({ type: 'REMOVE', payload: id });
	};

	const Increase = (id) => {
		dispatch({ type: 'INCREASE', payload: id });
	};

	const Decrease = (id) => {
		dispatch({ type: 'DECREASE', payload: id });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTAL' });
	}, [state.cart]);
	return (
		<AppContext.Provider
			value={{ ...state, ClearCart, Removeitem, Increase, Decrease }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const GlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
