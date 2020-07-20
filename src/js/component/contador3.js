import React from "react";
import { render } from "react-dom";
import PropType from "prop-types";

export class Contador3 extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}

	render() {
		setInterval(() => {
			this.setState({ counter: this.state.counter + 1 });
		}, 1000);
		//
		return (
			<div>
				<div>{this.state.counter}</div>
				<p>Contador</p>
			</div>
		);
	}
}

//render(<SecondsCounter />, document.getElementById("app"));
