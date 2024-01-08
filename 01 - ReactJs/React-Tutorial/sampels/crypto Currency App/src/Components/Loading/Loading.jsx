import React from 'react';
import './loading.css';
import { SpinnerInfinity } from 'spinners-react';
export const Loading = () => {
	return (
		<div className="coninter-spinner">
			<SpinnerInfinity
				size={79}
				thickness={100}
				speed={100}
				color="#270de8"
				secondaryColor="rgba(57, 172, 125, 1)"
			/>
		</div>
	);
};
