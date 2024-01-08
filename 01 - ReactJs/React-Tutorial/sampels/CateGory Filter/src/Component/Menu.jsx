import React from 'react';

export const Menu = ({ menu, FuncFilterCategory }) => {
	return (
		<div className="container-btn">
			{menu.map((CategoryMenu, index) => {
				return (
					<button
						key={index}
						onClick={() => {
							FuncFilterCategory(CategoryMenu);
						}}
					>
						{CategoryMenu}
					</button>
				);
			})}
		</div>
	);
};
