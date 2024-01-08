import React from 'react';
import { GlobalContexte } from '../Context/Context';

export const Home = () => {
	const { CloseMainMenu } = GlobalContexte();

	return (
		<div
			onMouseMove={CloseMainMenu}
		>
			Home
		</div>
	);
};
