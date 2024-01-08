import React from 'react';
import './styleDetailList.css';
export const ListDetailImgs = ({
	pic2,
	pic3,
	pic4,
	pic5,
	pic6,
	pic7,
	pic8,
	pic9,
}) => {
	return (
		<div className="container-img-list">
			<figure>{pic2 && <img src={`/${pic2}`} alt="a" />}</figure>
			<figure>{pic3 && <img src={`/${pic3}`} alt="b" />}</figure>
			<figure>{pic4 && <img src={`/${pic4}`} alt="c" />}</figure>
			<figure>{pic5 && <img src={`/${pic5}`} alt="d" />}</figure>
			<figure>{pic6 && <img src={`/${pic6}`} alt="yy" />}</figure>
			<figure>{pic7 && <img src={`/${pic7}`} alt="y" />}</figure>
			<figure>{pic8 && <img src={`/${pic8}`} alt="y" />}</figure>
			<figure>{pic9 && <img src={`/${pic9}`} alt="y" />}</figure>
		</div>
	);
};
