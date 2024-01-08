import React from 'react';

const ShowAllProduct = ({ product }) => {
	const name = product.stocked ? (
		product.name
	) : (
		<span style={{ color: 'red' }}>{product.name}</span>
	);
	return (
		<div>
			<h2>{name}</h2>
			<p>{product.price}</p>
		</div>
	);
};

export default ShowAllProduct;
