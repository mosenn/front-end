import React from 'react';

import {
	FaInstagram,
	FaWhatsapp,
	FaSkype,
	FaLinkedin,
	FaGithub,
	FaHome,
} from 'react-icons/fa';

import './header.css';

export const SocialHeader = () => {
	return (
		<header className="Header">
			<nav className="nav-menu-top">
				<ul className="top-menu">
					<li>
						<a
							title="Back to main Website"
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
