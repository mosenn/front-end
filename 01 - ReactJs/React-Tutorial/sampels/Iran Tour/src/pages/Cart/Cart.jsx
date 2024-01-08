import React from 'react';
import { GlobalConxtet } from '../../Context/Context';
import { BackHome } from '../BackToHomePageTour/BackHome';
export const Cart = () => {
	const { cart, Remove, Des, INC } = GlobalConxtet();

	const TotalCart = cart.reduce(
		(currnet, items) => currnet + items.ticket * items.amount,
		0
	);

	return (
		<div>
			<BackHome />

			<h1>CartItems:{cart.length}</h1>
			<h2>Total:{TotalCart}</h2>
			{cart.length === 0 ? (
				<p>CarT is empty</p>
			) : (
				cart.map((items) => {
					const { id, pic, text, city, amount, ticket } = items;

					return (
						<section key={id}>
							<h2>{city}</h2>
							<figure>
								<img src={pic} alt={city} />
								<figcaption>{ticket}</figcaption>
							</figure>
							<button
								onClick={() => {
									INC(id);
								}}
							>
								+
							</button>
							{amount}
							<button
								onClick={() => {
									Des(id);
								}}
							>
								-
							</button>
							<button
								onClick={() => {
									Remove(id);
								}}
							>
								Remove
							</button>
							<div></div>
						</section>
					);
				})
			)}
		</div>
	);
};

// const [total, Settotal] = useState(0);

// useEffect(() => {
// 	const Carttotal = cart.reduce(
// 		(perviosvalue, currentvalue) => perviosvalue + currentvalue.ticket,
// 		0
// 	);
// 	Settotal(Carttotal);
// }, [cart]);
