import React from "react";
//import { render } from "react-dom";

export class Contador2 extends React.Component {
	constructor() {
		super();
		this.state = {
			contador: 0
		};

		setInterval(
			() => this.setState({ contador: this.state.contador + 1 }),
			1000
		);
	}

	render() {
		return (
			<div className="container">
				<p>{this.state.contador}</p>
				<p>Contandador NO incluido en componente SecondsCounter</p>
			</div>
		);
	}
}

//render(<SecondsCounter />, document.getElementById("app"));
