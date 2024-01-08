import React from 'react';
// import { useState } from 'react';
// import { LogoIcon } from '../LogoIcon/LogoIcon';
// import { useMediaQuery } from 'react-responsive';
// import { GlobalContext } from '../../Context/DataContext';
// import { ArrowUp } from '../ArrowUP/ArrowUp';

import {
	FaInstagram,
	FaWhatsapp,
	FaSkype,
	FaLinkedin,
	FaGithub,
	FaHome,
} from 'react-icons/fa';

import './header.css';

export const Header = () => {
	// const [toggel, SetToggel] = useState(true);
	// const Mobile768 = useMediaQuery({ query: `(min-width:768px)` });
	// const { menu } = GlobalContext();

	// useEffect(() => {
	// 	if (Mobile768) {
	// 		SetToggel(true);
	// 	}
	// }, [Mobile768]);
	// let preveScroll = window.pageYOffset;
	// const [scrollMenu, SetscrollMenu] = useState('');

	// window.addEventListener('scroll', () => {
	// 	let currentScroll = window.pageYOffset;
	// 	if (preveScroll < currentScroll) {
	// 		SetscrollMenu('ShowMenu');
	// 	} else {
	// 		SetscrollMenu('');
	// 	}
	// 	preveScroll = currentScroll;
	// });

	return (
		<header className="Header">
			<nav className="nav-menu-top">
				<ul className="top-menu">
					<li>
						<a
							title="main web"
							href="https://mohsenabasi.netlify.app/"
							target="_blank"
						>
							<FaHome />
						</a>
					</li>
					<li title=" 0991 711 9041">
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
				</ul>
			</nav>
		</header>
	);
};
