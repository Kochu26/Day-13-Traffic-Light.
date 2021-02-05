import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import {Semaforo} from "./Semaforo";

//create your first component
export function Home() {
	return <div>
        <Semaforo></Semaforo>
    </div>;
}
