import React, { useState, useContext, createContext } from 'react';
import data from '../data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [StateResMenu, SetStateResMenu] = useState(false);
	const [submenu, Setsubmenu] = useState(false);
	const [location, SetLocation] = useState({});

	const [Page, Setpage] = useState({ page: '', links: [] });

	const ShowResponsiveMenu = () => {
		SetStateResMenu(!StateResMenu);
	};

	const ShowSubMenu = (text, coordinates) => {
		console.log(text);
		// if li text matche data links
		const findpage = data.find((link) => link.page === text);
		Setpage(findpage);
		SetLocation(coordinates);
		Setsubmenu(true);
	};

	const CloseMainMenu = () => {
		Setsubmenu(false);
	};
	return (
		<AppContext.Provider
			value={{
				ShowResponsiveMenu,
				StateResMenu,
				// submenu
				ShowSubMenu,
				submenu,
				//  location
				location,
				// page
				Page,
				CloseMainMenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const GlobalContexte = () => {
	return useContext(AppContext);
};

export { AppProvider };
