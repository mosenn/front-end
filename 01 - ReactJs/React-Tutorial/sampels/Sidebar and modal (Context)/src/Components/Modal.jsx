import React from 'react';
import './modal.css';
import { GlobalContext } from '../Context/Context';
import { FaTimes } from 'react-icons/fa';
export const Modals = () => {
	const { modal, CloseModal } = GlobalContext();
	return (
		<main>
			<section className={` modalsection ${modal && 'show'}`}>
				<div>
					<FaTimes onClick={CloseModal} />
				</div>
				<article>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ut, impedit quo iure blanditiis vitae laboriosam
						quibusdam sunt autem, odit voluptas ducimus deleniti
					</p>
				</article>
			</section>
			<div className={`${modal && 'bg'}`}></div>
		</main>
	);
};
