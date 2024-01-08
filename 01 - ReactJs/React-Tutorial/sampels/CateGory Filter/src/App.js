import './App.css';
import React, { useState } from 'react';
import data from './data';

import { ShowCateGory } from './Component/ShowCateGory';
import { Menu } from './Component/Menu';
import { Header } from './Component/Hedaer/Hedaer'
const ShowListMenu = [
	'all',
	...new Set(
		data.map((list) => {
			return list.category;
		})
	),
];

// let test = data.map((list) => {
// 	return list.category;
// });
// ShowListMenu.push(...test);

function App() {
	const [category, Setcategory] = useState(data);
	const [menu] = useState(ShowListMenu);

	const FliterCateGoris = (Categoris) => {
		// return orginal data
		if (Categoris === 'all') {
			Setcategory(data);
			return;
		}

		// return same category in data
		let Show_of_list = data.filter((items) => {
			return items.category === Categoris;
		});

		Setcategory(Show_of_list);
	};
	return (
		<section className="App">
			<Header></Header>
			<Menu menu={menu} FuncFilterCategory={FliterCateGoris} />
			<ShowCateGory data={category} />
		</section>
	);
}

export default App;
