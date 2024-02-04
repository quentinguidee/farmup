import { useEffect, useState } from "react";
import ClassicalFarm from "./components/ClassicalFarm";
import Toolbar from "./components/Toolbar";
import VerticalFarm from "./components/VerticalFarm";
import { Timer } from "./components/Timer";
import { State } from "./models/plant";
import Notification from "./components/Notification";
import Score from "./components/Score";

import "./styles/score.css";
import "./styles/progressbar.css";
import "./styles/toolbar.css";
import "./styles/farm.css";
import "./styles/window.css";
import "./styles/timer.css";
import "./styles/asset.css";
import "./styles/notification.css";

export default function App() {
    const [state, setState] = useState<State>("state0");
    const [timerHarvest, setTimerHarvest] = useState(100);
    const [waterLevel, setWaterLevel] = useState(0);
    const [waterLevelVertical] = useState(0);
    const [totalWater, setTotalWater] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (waterLevel >= 1) {
                setTimerHarvest(timerHarvest - 0.4);
            }
            if (timerHarvest <= 1) {
                setState("state2");
            }
            setWaterLevel(waterLevel - 1);
        }, 50);
        return () => clearInterval(interval);
    }, [waterLevel, timerHarvest]);

    const plant = () => {
        if (state !== "state0") return;
        setState("state1");
    };

    const water = () => {
        if (state !== "state1") return;
        setWaterLevel(100);
        setTotalWater(totalWater + 400);
    };

    const harvest = () => {
        if (state !== "state2") return;
        setState("state0");
        setTimerHarvest(100);
    };

    return (
        <>
            <Score position="left" water={totalWater} />
            <Score position="right" water={waterLevelVertical} />
            <Toolbar
                onPlant={plant}
                onWater={water}
                onHarvest={harvest}
                state={state}
            />
            <Timer />
            <Notification />
            <div className="farms">
                <ClassicalFarm
                    state={state}
                    timerHarvest={timerHarvest}
                    waterLevel={waterLevel}
                />
                <VerticalFarm />
            </div>
        </>
    );
}
