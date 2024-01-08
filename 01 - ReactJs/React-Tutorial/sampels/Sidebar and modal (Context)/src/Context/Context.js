import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [sidebar, setSidebar] = useState(false);
	const [modal, showmodal] = useState(false);

	const ToggelSidebar = () => {
		setSidebar(!sidebar);
	};

	const ToggelModal = () => {
		showmodal(!modal);
	};

	const CloseModal = () => {
		showmodal(false);
	};

	const CloseSidebar = () => {
		setSidebar(false);
	};
	return (
		<AppContext.Provider
			value={{
				sidebar,
				ToggelSidebar,
				modal,
				ToggelModal,
				CloseModal,
				CloseSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const GlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
