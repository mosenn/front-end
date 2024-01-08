import React from 'react';
import { SearchFun } from '../../app/Slice';
import { useDispatch } from 'react-redux';
import './search.css';
export const Search = () => {
	const dispatch = useDispatch();
	return (
		<div className="container-search">
			<form action="">
				<input
					type="text"
					placeholder="Search coins names.."
					onChange={(e) => {
						dispatch(SearchFun(e.target.value.trim()));
					}}
				/>
			</form>
		</div>
	);
};
