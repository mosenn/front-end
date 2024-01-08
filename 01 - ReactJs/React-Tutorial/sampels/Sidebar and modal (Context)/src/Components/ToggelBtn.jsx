import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GlobalContext } from '../Context/Context';
export const ToggelBtn = () => {
	const { sidebar, ToggelSidebar, modal, ToggelModal, CloseSidebar } =
		GlobalContext();
	return (
		<>
			<section>
				<div className="btn-sidebar" onClick={ToggelSidebar}>
					{sidebar ? <FaTimes /> : <FaBars />}
				</div>
			</section>
			<div className="wrapper-btn">
				<button
					className="btn-modal"
					onClick={() => {
						CloseSidebar();
						ToggelModal();
					}}
				>
					{modal ? 'Close Modal' : 'Show Modal'}
				</button>
			</div>
		</>
	);
};
