import React, { useState, createContext, useReducer, useContext } from 'react';
import { data } from '../data';
import { Reducer } from './Reducer';
const AppContext = createContext();

const initialState = {
	Data: data,

	cart: [],
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const [SortState, SetSortState] = useState('high');

	const ADDTOCART = (id) => {
		return dispatch({ type: 'ADD_TO_CART', payload: id });
	};
	const Remove = (id) => {
		return dispatch({ type: 'Remove_Cart', payload: id });
	};

	const INC = (id) => {
		return dispatch({ type: 'INC', payload: id });
	};
	const Des = (id) => {
		return dispatch({ type: 'DES', payload: id });
	};
	const GetInptValueSearch = (value) => {
		return dispatch({ type: 'Search', payload: value });
	};
	const SortFunc = () => {
		return dispatch({ type: 'Sort_Ticket_Price', payload: SortState });
	};
	// sort added to state
	return (
		<AppContext.Provider
			value={{
				...state,
				ADDTOCART,
				Remove,
				GetInptValueSearch,
				SortState,
				SetSortState,
				SortFunc,
				INC,
				Des,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const GlobalConxtet = () => {
	return useContext(AppContext);
};

export { AppProvider };
