import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
			<div className="container">
				<Link to="/">
					<a className="navbar-brand">
						<img
							height="40"
							src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
							alt=""
						/>
					</a>
				</Link>

				<div>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item dropdown">
							<a
								type="button"
								className="nav-link dropdown-toggle position-relative"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favorites
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									99+
									<span className="visually-hidden">favorites</span>
								</span>
							</a>

							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
