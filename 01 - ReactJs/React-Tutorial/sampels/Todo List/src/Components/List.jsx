import React from 'react';

export const List = ({ list, remove, edit }) => {
	return (
		<div className='test'>
			{list.map((items) => {
				const { id, title } = items;
				return (
					<article key={id} className="wrapper-list">
						<p>{title}</p>
						<button
							name="remove"
							onClick={() => {
								remove(id);
							}}
						>
							Remove
						</button>
						<button
							name="edit"
							onClick={() => {
								edit(id);
							}}
						>
							Edit
						</button>
					</article>
				);
			})}
		</div>
	);
};
