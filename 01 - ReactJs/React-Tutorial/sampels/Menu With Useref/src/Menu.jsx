import React, { useState, useRef, useEffect } from 'react';
import { social, links } from './data';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';

export const Menu = () => {
	const [showMenu, SetShowMenu] = useState(false);
	const HeightNav = useRef(null);
	const HeightUl = useRef(null);

	useEffect(() => {
		const ul = HeightUl.current.getBoundingClientRect().height;
		if (showMenu) {
			HeightNav.current.style.height = `${ul}px`;
		} else {
			HeightNav.current.style.height = '0px';
		}
	}, [showMenu]);
	return (
		<>
			<section className="wapper-title-icon">
				<h2>Welcome</h2>
				<div>
					{showMenu ? (
						<FaRegWindowClose
							onClick={() => {
								SetShowMenu(!showMenu);
							}}
						></FaRegWindowClose>
					) : (
						<FaBars
							onClick={() => {
								SetShowMenu(!showMenu);
							}}
						></FaBars>
					)}
				</div>
			</section>
			<menu>
				<nav className="nav" ref={HeightNav}>
					<ul className="ul" ref={HeightUl}>
						{links.map((li) => {
							const { id, text, url } = li;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</nav>

				<nav className="nav-social">
					<ul className="social">
						{social.map((li) => {
							const { id, url, icon } = li;
							return (
								<li key={id}>
									<a href={url}>{icon}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</menu>
		</>
	);
};
