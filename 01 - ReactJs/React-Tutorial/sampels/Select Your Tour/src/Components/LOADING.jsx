import React from 'react';
import { Ellipsis } from 'react-awesome-spinners';

export const LOADING = () => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			
				height: '90vh',
				overflow: 'hidden',
			}}
		>
			<h1>Loading</h1>
			<Ellipsis />
		</div>
	);
};
