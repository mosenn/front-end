import React, { useState } from 'react';

export const SingelTour = ({ id, name, image, info, removetour }) => {
	const [ReadMore, SetReadMore] = useState(false);
	return (
		<section>
			<div key={id}>
				<h3>{name}</h3>
				<figure>
					<img src={image} alt={name} width="100%" />
				</figure>
				<article>
					<h5>{`${info.substring(0, 80)}`}</h5>

					<div
						className={`${ReadMore ? 'show' : 'hide'} parent-info`}
					>
						<p>{info}</p>
					</div>

					<span
						style={{
							fontSize: '17px',
							cursor: 'pointer',
							color: '#2a3575dd',
							fontWeight: 'bold',
						}}
						onClick={() => {
							SetReadMore(!ReadMore);
						}}
					>
						{ReadMore ? ' Less More' : ' Read More'}
					</span>
				</article>
				<div className="parent-btn">
					<button
						onClick={() => {
							removetour(id);
						}}
					>
						Remove This Tour
					</button>
				</div>
			</div>
		</section>
	);
};
