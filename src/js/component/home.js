import React from "react";
import { SecondsCounter } from "./secondscounter.js";
import { Contador2 } from "./contador2.js";

export function Home() {
	//suma();

	return (
		<div className="text-center mt-5">
			<SecondsCounter />
			<Contador2 />
		</div>
	);
}

/*Observar diferencia al incluir contador en elemento "padre" SecondsCounter
 y hacerlo sin incluir en el mismo elemento al usar Counter. Hay que usar el counter desde el componente 
 SecondsCounter para que se inicialicen a la vez*/
