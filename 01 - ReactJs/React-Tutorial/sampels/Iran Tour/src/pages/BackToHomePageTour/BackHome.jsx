import React from 'react';
import { Link } from 'react-router-dom';
export const BackHome = () => {
	return (
		<div>
			<Link to={'/'}>
				<h3>Back To Home Page</h3>
			</Link>
		</div>
	);
};
