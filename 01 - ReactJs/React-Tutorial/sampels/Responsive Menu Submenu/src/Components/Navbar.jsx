import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { GlobalContexte } from '../Context/Context';
export const Navbar = () => {
	const { ShowResponsiveMenu, ShowSubMenu, CloseMainMenu } = GlobalContexte();

	const DisplaySubMenu = (e) => {
		const page = e.target.textContent;
		const tmpBtn = e.target.getBoundingClientRect();
		const center = (tmpBtn.left + tmpBtn.right) / 2.5;
		const bottom = tmpBtn.bottom - 3;

		ShowSubMenu(page, { center, bottom });
	};


	return (
		<>
			<section
				
				className="parent-logo-fasbar"
				onMouseOver={CloseMainMenu}
			
			>
				<figure>
					<img src="" alt="" /> logo
				</figure>
				<div className="fas-bars">
					<FaBars onClick={ShowResponsiveMenu}></FaBars>
				</div>
			</section>
			<menu className="Main-Menu">
				<nav>
					<ul>
						<li onMouseOver={DisplaySubMenu}>Products</li>
						<li onMouseOver={DisplaySubMenu}>Developers</li>
						<li onMouseOver={DisplaySubMenu}>Company</li>
					</ul>
				</nav>
			</menu>
		</>
	);
};
