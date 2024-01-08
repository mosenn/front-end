import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalConxtet } from '../../Context/Context';
import './header.css';
export const Header = () => {
	const [inpValue, setInpValue] = useState('');
	const { GetInptValueSearch, SortState, SetSortState, SortFunc, cart } =
		GlobalConxtet();
	const HandeleCheckbox = () => {
		if (SortState === 'high') {
			SetSortState('low');
		} else if (SortState === 'low') {
			SetSortState('high');
		}
	};
	return (
		<div className="search-head">
			<h1>Header</h1>
			<form action="">
				<input
					type="text"
					name="search"
					id=""
					placeholder="type city name"
					onChange={(e) => {
						setInpValue(e.target.value);
						GetInptValueSearch(inpValue);
					}}
				/>
				<label htmlFor="">High Price</label>
				<input
					type="checkbox"
					name=""
					id=""
					onChange={() => {
						HandeleCheckbox();
						SortFunc();
					}}
				/>
			</form>
			<Link to="/cart">Go to Cart : You have {cart.length} </Link>
		</div>
	);
};
