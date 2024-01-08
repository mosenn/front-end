import React from 'react';
import { GlobalConxtet } from '../../Context/Context';
import { SingelItems } from '../SingelItems/SingelItems';
import './singelTour.css';

export const MapingItems = ({ data }) => {
	const { SearchValue, sort } = GlobalConxtet();

	const hanelFilter = () => {
		let dataTour = data;
		if (SearchValue) {
			dataTour = dataTour.filter((items) =>
				items.city.toLowerCase().includes(SearchValue)
			);
			return dataTour;
		}
		if (sort) {
			dataTour = dataTour.sort((a, b) =>
				// srot is add to state from reducer
				sort === 'low' ? a.ticket - b.ticket : b.ticket - a.ticket
			);
		}
		return dataTour; //main asli
	};
	return (
		<div className="main-tours">
			{hanelFilter().map((items) => {
				return <SingelItems key={items.id} {...items}></SingelItems>;
			})}
		</div>
	);
};
