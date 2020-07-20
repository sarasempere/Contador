import React from "react";
//import { render } from "react-dom";
import PropTypes from "prop-types";

export function Contador(props) {
	//let seconds = props.seconds;

	return (
		<div>
			{props.seconds.toString()}
			<p>Contador</p>
		</div>
	);
}

Contador.propTypes = {
	//atributo
	seconds: PropTypes.string //objeto
};
