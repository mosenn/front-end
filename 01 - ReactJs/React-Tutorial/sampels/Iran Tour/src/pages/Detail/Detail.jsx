import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalConxtet } from '../../Context/Context';
import { ListDetailImgs } from './ListDetailImgs';
import { BackHome } from '../BackToHomePageTour/BackHome';
export const Detail = () => {
	const { Data } = GlobalConxtet();
	const { id } = useParams();

	const filData = Data.filter((items) => items.id.toString() === id);
	return (
		<div>
			<BackHome />
			{filData.map((items, index) => {
				const { pic, text, city, ticket, citypics, id } = items;

				return (
					<article key={id}>
						<p>{text}</p>

						<h3 style={{ marginTop: '15px' }}>
							{city} - Ticket : {ticket}
							<span>$</span>
						</h3>
						<figure>
							<img src={`/${pic}`} alt={city} />
							{citypics.map((pics, index) => {
								return (
									<ListDetailImgs
										{...pics}
										key={id}
									></ListDetailImgs>
								);
							})}
						</figure>
					</article>
				);
			})}
		</div>
	);
};
