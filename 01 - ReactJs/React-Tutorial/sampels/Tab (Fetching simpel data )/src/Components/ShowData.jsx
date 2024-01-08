import React, { useState } from 'react';
export const ShowData = ({ company, dates, duties, title, id }) => {
	const [ShowTxt, setShowTxt] = useState(false);
	return (
		<div className="container">
			<article>
				<h4>{title}</h4>
				<p>{dates}</p>
				<p>company:{company}</p>
				{duties.map((texts, index) => {
					return (
						<p key={index}>
							{ShowTxt ? texts : texts.substring(0, 0)}
						</p>
					);
				})}
				<span
					onClick={() => {
						setShowTxt(!ShowTxt);
					}}
				>
					{ShowTxt ? 'close' : 'read more'}
				</span>
			</article>
		</div>
	);
};
