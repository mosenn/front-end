import React from 'react';
import { SingelTour } from './SingelTour';
import './maptour.css';
export const MapTour = ({ data, removetour }) => {
	return (
		<div className="main-tour">
			{data.map((data) => {
				return (
					<SingelTour
						{...data}
						key={data.id}
						removetour={removetour}
					></SingelTour>
				);
			})}
		</div>
	);
};
