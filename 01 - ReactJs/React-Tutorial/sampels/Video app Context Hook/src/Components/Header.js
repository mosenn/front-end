import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
	return (
		<header>
			<section className="container">
				<div className="brand">
					<Link to="/">WatchList</Link>
                </div>
                
				<ul className="nav-links">
					<li>
						<Link to="/">Watch List</Link>
						<Link to="/watched">Watched</Link>
						<Link to="/add" className="btn">
							+ Add
						</Link>
					</li>
				</ul>
			</section>
		</header>
	);
};
