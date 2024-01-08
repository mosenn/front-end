import React, { useContext } from 'react';
import { links } from '../data';
import { AppContext } from '../Context/Context';

export const Sidebar = () => {
	const data = useContext(AppContext);
	const { sidebar } = data;
	// const { sidebar } = GlobalContext();
	return (
		<aside className={`${sidebar && 'ShowSideBar'}`}>
			<menu>
				<nav>
					<ul>
						{links.map((lis) => {
							const { id, url, icon, text } = lis;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
									<span>{icon}</span>
								</li>
							);
						})}
					</ul>
				</nav>
			</menu>
		</aside>
	);
};
