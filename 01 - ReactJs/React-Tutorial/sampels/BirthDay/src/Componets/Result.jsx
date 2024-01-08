import React from 'react';

export const Result = ({ ShowList }) => {
	const { UserName, Age, Day, id, pic } = ShowList;
	return (
		<div>
			<article key={id}>
				<figure>
					<img src={pic} alt={UserName} />
				</figure>
				<div>
					<p>
						<span>Name:</span>
						{UserName}
					</p>
					<p>
						<span>Age:</span>
						{Age}
					</p>
					<p>
						<span>BirithDay:</span>
						{Day}
					</p>
				</div>
			</article>
		</div>
	);
};
