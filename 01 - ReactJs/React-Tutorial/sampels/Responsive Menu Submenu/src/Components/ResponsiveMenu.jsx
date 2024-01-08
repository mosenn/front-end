import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './ResponsiveMenu.css';
import data from '../data';
import { GlobalContexte } from '../Context/Context';
export const ResponsiveMenu = () => {
	const { StateResMenu, ShowResponsiveMenu } = GlobalContexte();

	return (
		<>
			<section
				className={`${
					StateResMenu
						? 'parent-responsive-menu Show'
						: 'parent-responsive-menu'
				}`}
			>
				<div>
					<FaTimes onClick={ShowResponsiveMenu} />
				</div>
				<nav>
					{data.map((items, index) => {
						const { page, links } = items;
						return (
							<ul key={index}>
								<h4>{page}</h4>

								{links.map((link, index) => {
									const { label, icon, url } = link;
									return (
										<li key={index}>
											<span>{label}</span>
											<span>{icon}</span>
										</li>
									);
								})}
							</ul>
						);
					})}
				</nav>
			</section>
		</>
	);
};
