import React from "react";
//import { render } from "react-dom";

export class SecondsCounter extends React.Component {
	constructor() {
		super();
		this.state = {
			time: new Date()
		};
	}

	render() {
		setInterval(() => this.setState({ time: new Date() }), 1000);

		return (
			<div>
				<h1>Hola!</h1>
				<h2>It is: {this.state.time.getSeconds().toString()}</h2>
				<h2>It is: {this.state.time.getYear().toString()}</h2>
			</div>
		);
	}
}

//render(<SecondsCounter />, document.getElementById("app"));
