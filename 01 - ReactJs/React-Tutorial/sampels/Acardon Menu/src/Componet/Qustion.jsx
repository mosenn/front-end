import React, { useState } from 'react';

export const Qustion = ({ title, info }) => {
	const [ShowList, SetShowList] = useState(false);
	return (
		<section className="container-qustion">
			<h4>{title}</h4>
			<div>
				<article
					className={`${ShowList ? 'setHight' : 'normalheight'}`}
				>
					{ShowList ? (
						<p className={`${ShowList && 'ShowpTag'} `}>{info}</p>
					) : (
						<p className={`${!ShowList && 'p-tag'}`}>{info}</p>
					)}
				</article>
			</div>
			<span
				onClick={() => {
					SetShowList(!ShowList);
				}}
			>
				{ShowList ? '-' : '+'}
			</span>
		</section>
	);
};
