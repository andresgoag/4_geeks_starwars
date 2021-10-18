import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const data = props.item;
	const keysArray = Object.keys(data);
	const threeProperties = keysArray.slice(0, 3);

	const urlArray = data.url.split("/");
	const type = urlArray[urlArray.length - 3];
	const id = urlArray[urlArray.length - 2];

	const prettify = key => {
		return key.replace("_", " ");
	};

	return (
		<div className="card text-white bg-dark flex-shrink-0 mx-2">
			<img src={data.img_url} className="card-img-top" />

			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				{threeProperties.map((key, index) => (
					<p className="card-text m-0 card-property" key={`element${index}`}>
						{prettify(key)}: {data[key]}
					</p>
				))}
			</div>

			<div className="card-footer my-3 d-flex align-items-center justify-content-between">
				<Link to={`/details/${type}/${id}`}>
					<button className="btn btn-outline-light">Learn more</button>
				</Link>

				<button className="btn btn-outline-success">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object
};
