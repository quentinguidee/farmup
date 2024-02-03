import ClassicalFarm from "./components/ClassicalFarm";
import Toolbar from "./components/Toolbar";
import VerticalFarm from "./components/VerticalFarm";
import { Timer } from "./components/Timer";

import "./styles/toolbar.css";
import "./styles/farm.css";
import "./styles/window.css";
import "./styles/timer.css";
import "./styles/asset.css";
import { useState } from "react";
import { State } from "./models/plant";

export default function App() {
    const [state, setState] = useState<State>("state0");

    const plant = () => {
        if (state === "state0") setState("state1");
    };

    const water = () => {
        if (state === "state1") setState("state2");
    };

    const harvest = () => {
        if (state === "state2") setState("state0");
    };

    return (
        <>
            <Toolbar onPlant={plant} onWater={water} onHarvest={harvest} />
            <Timer />
            <div className="farms">
                <ClassicalFarm state={state} />
                <VerticalFarm />
            </div>
        </>
    );
}
