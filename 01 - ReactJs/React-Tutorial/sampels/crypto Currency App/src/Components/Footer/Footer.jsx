import React, { useRef } from 'react';
import {
	FaWhatsapp,
	FaPhone,
	FaLinkedin,
	FaSkype,
	FaInstagram,
} from 'react-icons/fa';

import Typed from 'typed.js';

import './footer.css';

export const Footer = () => {
	const citeRef = useRef();

	React.useEffect(() => {
		const options = {
			strings: ['Mohsen Abasi', 'Web designer', 'Front End Developer'],
			typeSpeed: 100,
			backSpeed: 70,
			loop: true,
		};

		// elRef refers to the <span> rendered below
		Typed.current = new Typed(citeRef.current, options);

		return () => {
			// Make sure to destroy Typed instance during cleanup
			// to prevent memory leaks
			Typed.current.destroy();
		};
	}, []);
	return (
		<footer>
			<div>
				<cite>
					Create By :
					<span ref={citeRef} className="animate-type"></span>
				</cite>
			</div>
			<nav>
				<ul>
					<li className="phone-footer">
						<span>
							<FaPhone />
						</span>
						0991 711 90 41
					</li>
					<li title="	0991 711 9041">
						<a
							href="https://chatwith.io/s/625e8ca86894d"
							target="_blank"
						>
							<span>
								<FaWhatsapp />
							</span>
							0991 711 90 41
						</a>
					</li>

					<li title="mohsen abasi">
						<a
							href="https://www.linkedin.com/in/mohsen-abasi-63a5121b3/"
							target="_blank"
						>
							<span>
								<FaLinkedin />
							</span>
							Linkedin
						</a>
					</li>
					<li title="live:.cid.e7b85c58c7d97a60">
						<a
							href="https://join.skype.com/invite/Ck2e9jcQCXb5"
							target="_blank"
						>
							<span>
								<FaSkype />
							</span>
							skype
						</a>
					</li>
					<li title="webdesignlearn">
						<a
							href="https://www.instagram.com/webdesignlearn/"
							target="_blank"
						>
							<span>
								<FaInstagram />
							</span>
							webdesignlearn
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
