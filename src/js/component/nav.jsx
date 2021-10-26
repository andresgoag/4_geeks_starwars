import React from "react";
import { Link } from "react-router-dom";

// Context
import { myContext } from "../store/appContext";

export const Nav = () => {
	const { store, actions } = React.useContext(myContext);
	const [isHovering, setisHovering] = React.useState(-1);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
			<div className="container">
				<a className="navbar-brand" type="button">
					<img
						height="40"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
						alt=""
					/>
				</a>

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
									{store.favoritesList.length}
									<span className="visually-hidden">favorites</span>
								</span>
							</a>

							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								{store.favoritesList.map((favorite, index) => (
									<li
										key={index}
										onMouseEnter={() => setisHovering(index)}
										onMouseLeave={() => setisHovering(-1)}
										className="px-2 py-1">
										{favorite}
										<span
											className={`text-dark ${isHovering == index ? "" : "hidden"} ps-2`}
											onClick={() => actions.deleteFavorite(favorite)}>
											<i className="fas fa-trash-alt" />
										</span>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
