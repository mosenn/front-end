import React from 'react';

import ShowAllProduct from './ShowAllProduct';
import { ProductCateGory } from './ProductCateGory';

class TabelShowProducts extends React.Component {

	render() {
		const filtertext = this.props.filtertext;
		const stockonly = this.props.onlyStock;
		const products = this.props.products;
		let not = null;
		let row = [];

		products.forEach((product) => {
			if (product.name.indexOf(filtertext) === -1) {
				return;
			}
			if (stockonly && !product.stocked) {
				return;
			}
			if (product.category !== not) {
				row.push(
					<ProductCateGory
						category={product.category}
						key={product.category}
					></ProductCateGory>
				);
			}
			row.push(
				<ShowAllProduct
					product={product}
					key={product.name}
				></ShowAllProduct>
			);
			not = product.category;
		});

		return (
			<>
				<div>
					<span>Price:</span>
					<span>Name</span>
				</div>
				{row}
			</>
		);
	}
}

export default TabelShowProducts;
