import React from "react";
import PropTypes from "prop-types";
import { Characteristic } from "./characteristic.jsx";
import { Link, useParams } from "react-router-dom";

export const Details = props => {
	const URL_API = "https://swapi.dev/api";

	const { type, id } = useParams();

	const [item, setItem] = React.useState({});

	React.useEffect(() => {
		fetch(`${URL_API}/${type}/${id}`)
			.then(response => {
				if (response.ok) return response.json();
				throw new Error("Error fetching from API");
			})
			.then(data => {
				setItem(data);
			})
			.catch(error => console.error(error));
	}, []);

	const prettify = key => {
		return key.replace("_", " ");
	};

	return (
		<div className="container">
			<div className="row justify-content-center my-3">
				<div className="col-auto">
					<div className="card text-white bg-dark details mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499&width=960"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{"name" in item ? item.name : ""}</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div className="row g-0">
							<div className="col-12">
								<div className="characteristics-container">
									{Object.keys(item).map((characteristic, index) => {
										if (typeof item[characteristic] === "string") {
											return (
												<Characteristic
													name={prettify(characteristic)}
													content={item[characteristic]}
													key={`characteristic${index}`}
												/>
											);
										}
									})}
								</div>
							</div>
						</div>
						<Link to="/">
							<button className="mt-3 btn btn-success">Go to home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
