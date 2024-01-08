import React from 'react';

export const ShowCateGory = ({ data }) => {
	return (
		<div className="main-category">
			{data.map((items) => {
				const { id, img, price, desc, title } = items;
				return (
					<section key={id} className="wrapper-category">
						<figure>
							<img className="imgs" src={img} alt={price} />
						</figure>
						<article>
							<h4>{title}</h4>
							<p>{desc.substring(0, 15)}</p>
							<p>{price}</p>
						</article>
					</section>
				);
			})}
		</div>
	);
};
