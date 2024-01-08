import React from 'react';
import { GlobalContext } from '../Context/Context';
export const Navbar = () => {
	const { amount } = GlobalContext();
	return (
		<>
			<nav className="nav-icon">
				<ul>
					<li>icon bag shoping</li>
					<li>{amount}</li>
				</ul>
			</nav>
		</>
	);
};
