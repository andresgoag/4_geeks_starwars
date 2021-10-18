import React from "react";
import { PropTypes } from "prop-types";

export const Characteristic = props => {
	return (
		<div className="characteristic">
			<p className="characteristic__title">{props.name}</p>
			<p className="characteristic__content">{props.content}</p>
		</div>
	);
};

Characteristic.propTypes = {
	name: PropTypes.string,
	content: PropTypes.string
};
