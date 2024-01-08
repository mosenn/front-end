import React from 'react';
import { GlobalContext } from '../Context/Context';
export const CartItems = ({ id, img, title, price, amount }) => {
	const { Removeitem, Increase, Decrease } = GlobalContext();
	return (
		<article className="cart-items-parent">
			<figure>
				<img src={img} alt="" />
			</figure>
			<div className="wrraper-title-price">
				<h3>{title}</h3>
				<h4 className="item-price"> {price}</h4>
				<button
					className="remove-btn"
					onClick={() => {
						Removeitem(id);
					}}
				>
					remove
				</button>
			</div>
			<div className="inc-dec-wrapper">
				<button className="amount-btn" onClick={() => Increase(id)}>
					+
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn" onClick={() => Decrease(id)}>
					-
				</button>
			</div>
		</article>
	);
};
