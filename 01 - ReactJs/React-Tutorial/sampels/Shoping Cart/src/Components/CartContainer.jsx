import React from 'react';
import { CartItems } from './CartItems';
import { GlobalContext } from '../Context/Context';
export const CartContainer = () => {
	const { cart, total, ClearCart } = GlobalContext();

	if (cart.length === 0) {
		return (
			<section className="cart">
				<header>
					<h1 className="empty-cart">your Cart is empty</h1>
					<h3>if you want see product agin refresh page</h3>
					<button
						onClick={() => {
							alert('Page is refresh');
							window.location.reload();
						}}
					>
						Refresh Page
					</button>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>

			<div>
				{cart.map((items) => {
					return <CartItems key={items.id} {...items}></CartItems>;
				})}
			</div>
			<footer>
				<div className="cart-total">
					<h4>total</h4>
					<p>
						$<span>{total}</span>
					</p>
				</div>
				<button className="btn clear-btn" onClick={ClearCart}>
					Clear cart
				</button>
			</footer>
		</section>
	);
};
