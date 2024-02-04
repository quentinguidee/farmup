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
import "./styles/popup.css";
import "./styles/info.css";

export default function App() {
    const [running, setRunning] = useState(false);

    const [state, setState] = useState<State>("state0");
    const [stateVertical, setStateVertical] = useState<State>("state0");

    const [timerHarvest, setTimerHarvest] = useState(100);
    const [timerHarvestVertical, setTimerHarvestVertical] = useState(100);

    const [waterLevel, setWaterLevel] = useState(0);

    const [totalWater, setTotalWater] = useState(0);
    const [totalWaterVertical, setTotalWaterVertical] = useState(0);

    useEffect(() => {
        if (!running) return;
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
    }, [waterLevel, timerHarvest, running]);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            switch (stateVertical) {
                case "state0":
                    setStateVertical("state1");
                    break;
                case "state1":
                    if (timerHarvestVertical <= 1) {
                        setStateVertical("state2");
                    }
                    setTotalWaterVertical((p) => p + 5);
                    setTimerHarvestVertical(timerHarvestVertical - 4);
                    break;
                case "state2":
                    setStateVertical("state0");
                    setTimerHarvestVertical(100);
                    break;
            }
        }, 500);
        return () => clearInterval(interval);
    }, [timerHarvestVertical, stateVertical, running]);

    const plant = () => {
        if (state !== "state0") return;
        setState("state1");
        if (!running) setRunning(true);
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
            <Score position="right" water={totalWaterVertical} />
            <Toolbar
                onPlant={plant}
                onWater={water}
                onHarvest={harvest}
                state={state}
            />
            <Timer running={running} />
            <Notification />
            <div className="farms">
                <ClassicalFarm
                    state={state}
                    timerHarvest={timerHarvest}
                    waterLevel={waterLevel}
                />
                <VerticalFarm
                    state={stateVertical}
                    timerHarvest={timerHarvestVertical}
                    waterLevel={100}
                />
            </div>
        </>
    );
}
