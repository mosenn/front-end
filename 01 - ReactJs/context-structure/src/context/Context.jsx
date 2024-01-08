import React, { useContext, createContext } from 'react';
import { useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	showpopup: true,
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//  functions

	const ShowPopup = (showpop) => {
		dispatch({ type: 'Showing_POP', payload: showpop });
	};

	// returns function or states
	return (
		<AppContext.Provider
			value={{
				name: 'I Value in Context Folder Check AppContextProvider',
				state,
				ShowPopup,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export const useGlovalcontext = () => {
	return useContext(AppContext);
};
