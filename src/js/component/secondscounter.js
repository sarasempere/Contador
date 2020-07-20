import React from "react";
//import { render } from "react-dom";
import { Contador } from "./contador.js";

export class SecondsCounter extends React.Component {
	constructor() {
		super();
		this.state = {
			time: new Date()
		};
		setInterval(() => {
			this.setState({ time: new Date() });
			this.suma();
		}, 1000);
	}

	seconds = 0;
	suma() {
		this.seconds = this.seconds + 1;
	}

	render() {
		return (
			<div className="container">
				<p>Hora actual</p>
				<div className="row">
					<div className="hours col col-md-4">
						{" "}
						{this.state.time.getHours().toString()}
						<p>hours</p>
					</div>
					<div className="minutes col col-md-4">
						{" "}
						{this.state.time.getMinutes().toString()}
						<p>minutes</p>
					</div>
					<div className="seconds col col-md-4">
						{this.state.time.getSeconds().toString()}
						<p>seconds</p>
					</div>
				</div>
				<div>
					<Contador seconds={this.seconds} />
				</div>
			</div>
		);
	}
}

//render(<SecondsCounter />, document.getElementById("app"));
