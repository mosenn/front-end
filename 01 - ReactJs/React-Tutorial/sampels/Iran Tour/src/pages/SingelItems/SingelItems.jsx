import React, { useState } from 'react';
import { GlobalConxtet } from '../../Context/Context';

import { Link } from 'react-router-dom';

export const SingelItems = ({ text, id, city, ticket, amount, pic }) => {
	const { ADDTOCART, cart } = GlobalConxtet();
	const [ReadMore, SetReadMore] = useState(false);

	let GetToursIdForDisabledBtn = cart.find((items) => items.id === id);
	const DisabledBtn = GetToursIdForDisabledBtn ? true : false;

	return (
		<div>
			<h4>{city}</h4>
			<article>
				<figure>
					<img src={pic} alt={city} />
				</figure>
				<p className="text">
					{ReadMore ? text : text.substring(0, 30)}

					<span
						style={{ margin: '5px', cursor: 'pointer' }}
						onClick={() => {
							SetReadMore(!ReadMore);
						}}
					>
						{ReadMore ? 'More' : 'Less show '}
					</span>
				</p>
				{ticket}$
			</article>

			<div className="container-btns-tours">
				<Link to={`/detail/${id}`}>See More Picture</Link>
				<button
					disabled={DisabledBtn}
					onClick={(e) => {
						ADDTOCART(id);
					}}
				>
					{!DisabledBtn ? 'Add To Cart' : 'You Haved'}
				</button>
			</div>
		</div>
	);
};
