import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { SecondsCounter } from "./secondscounter.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<SecondsCounter />
		</div>
	);
}
