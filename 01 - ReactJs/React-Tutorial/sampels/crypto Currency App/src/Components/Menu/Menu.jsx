import React from 'react';
import './menu.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	FaInstagram,
	FaWhatsapp,
	FaSkype,
	FaHeadphonesAlt,
	FaLinkedin,
	FaGithub,
	FaChrome,
	FaHome,
	FaAngleLeft,
} from 'react-icons/fa';
import { useState } from 'react';
// import { IconName } from 'react-icons/fa';

export const Menu = () => {
	let preveScroll = window.pageYOffset;
	const [scrollMenu, SetscrollMenu] = useState('');

	window.addEventListener('scroll', () => {
		let currentScroll = window.pageYOffset;
		if (preveScroll < currentScroll) {
			SetscrollMenu('ShowMenu');
		} else {
			SetscrollMenu('');
		}
		preveScroll = currentScroll;
	});
	return (
		<menu>
			<nav className="nav-menu-top">
				<ul className={` top-menu ${scrollMenu && 'ShowMenu'}  `}>
					<li title="main web">
						<a
							href="https://mohsenabasi.netlify.app/"
							target="_blank"
						>
							<FaChrome />
						</a>
					</li>
					<li title="	0991 711 9041">
						<a
							href="https://chatwith.io/s/625e8ca86894d"
							target="_blank"
						>
							<FaWhatsapp />
						</a>
					</li>
					<li title="github">
						<a href="https://github.com/mosenn" target="_blank">
							<FaGithub />
						</a>
					</li>
					<li title="mohsen abasi">
						<a
							href="https://www.linkedin.com/in/mohsen-abasi-63a5121b3/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
					<li title="live:.cid.e7b85c58c7d97a60">
						<a
							href="https://join.skype.com/invite/Ck2e9jcQCXb5"
							target="_blank"
						>
							<FaSkype />
						</a>
					</li>
					<li title="webdesignlearn">
						<a
							href="https://www.instagram.com/webdesignlearn/"
							target="_blank"
						>
							<FaInstagram />
						</a>
					</li>
					<li className="phone">
						<span>
							<FaHeadphonesAlt />
						</span>
						0991 711 9041
					</li>
					<li title="back to home">
						<a href="/">
							<FaAngleLeft className="angel-right" />
						</a>
					</li>
				</ul>
			</nav>
		</menu>
	);
};
