import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { GlobalContexte } from '../Context/Context';

export const SubMenu = () => {
	const [columns, SetColumns] = useState('');
	const {
		submenu,
		location,
		Page: { page, links },
	} = GlobalContexte();
	const container = useRef(null);

	useEffect(() => {
		SetColumns('col-2');
		const navSubmenu = container.current;
		const { center, bottom } = location;
		navSubmenu.style.left = `${center}px`;
		navSubmenu.style.top = `${bottom}px`;
		console.log(links);
		console.log(page);

		if (links.length === 3) {
			SetColumns('col-3');
		}

		if (links.length > 3) {
			SetColumns('col-4');
		}
	}, [page, location, links]);

	return (
		<>
			<aside
				ref={container}
				className={`${
					submenu ? 'nav-submenu show-submenu' : 'none-submenu'
				}`}
			>
				<div className={`submenu-center ${columns}`}>
					<p>{page}</p>
					{links.map((li, index) => {
						const { icon, url, label } = li;

						return (
							<div className="parent-a" key={index}>
								<a href="{url}">
									{icon}
									{label}
								</a>
							</div>
						);
					})}
				</div>
			</aside>
		</>
	);
};
