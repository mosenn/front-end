import React, { useState, useEffect } from 'react';
// rgb, weight, index, hexColor;
export const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setalert] = useState(false);

	const bgc = rgb.join(',');
	const hexValue = `#${hexColor}`;
	useEffect(() => {
		let timeout = setTimeout(() => {
			setalert(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [alert]);
	return (
		<>
			<section>
				<article
					className="wrapper-colors"
					style={{ backgroundColor: `rgb(${bgc})` }}
					onClick={() => {
						setalert(true);
						navigator.clipboard.writeText(hexValue);
					}}
				>
					<p>{hexValue}</p>
					<p>weight: {weight}%</p>
					{alert && <p>color is copy </p>}
				</article>
			</section>
		</>
	);
};
