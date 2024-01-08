import React, { useEffect } from 'react';

export const Alert = ({ type, msg, alertfunc }) => {
	useEffect(() => {
		let timeout = setTimeout(() => {
			alertfunc();
		}, 3000);
		return () => clearTimeout(timeout);
	},[alertfunc]);

	return (
		<div>
			<p style={{ backgroundColor: `${type}` }}>{msg}</p>
		</div>
	);
};
