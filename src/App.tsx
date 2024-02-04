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
import Popup from "./components/Popup";

export default function App() {
    const [running, setRunning] = useState(false);
    const [end, setEnd] = useState(false);

    const [state, setState] = useState<State>("state0");
    const [stateVertical, setStateVertical] = useState<State>("state0");

    const [timerHarvest, setTimerHarvest] = useState(100);
    const [timerHarvestVertical, setTimerHarvestVertical] = useState(100);

    const [waterLevel, setWaterLevel] = useState(0);

    const [totalWater, setTotalWater] = useState(0);
    const [totalWaterVertical, setTotalWaterVertical] = useState(0);

    const [carrots, setCarrots] = useState(0);
    const [carrotsVertical, setCarrotsVertical] = useState(0);

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
                    setCarrotsVertical((p) => p + 1);
                    setTimerHarvestVertical(100);
                    break;
            }
        }, 500);
        return () => clearInterval(interval);
    }, [timerHarvestVertical, stateVertical, running]);

    const plant = () => {
        if (state !== "state0") return;
        setState("state1");
        // if (!running) setRunning(true);
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
        setCarrots((p) => p + 1);
    };

    const onEnd = () => {
        setRunning(false);
        setEnd(true);
    };

    return (
        <>
            <Score position="left" water={totalWater} carrots={carrots * 3} />
            <Score
                position="right"
                water={totalWaterVertical}
                carrots={carrotsVertical * 4}
            />
            <Toolbar
                onPlant={plant}
                onWater={water}
                onHarvest={harvest}
                state={state}
            />
            <Timer running={running} onEnd={onEnd} />
            <Notification />
            <Popup
                show={!running && !end}
                onClose={() => setRunning(true)}
                title="Cultures verticales"
            >
                Avec une population mondiale actuelle dépassant les 7,85
                milliards et une prévision de 9,8 milliards d'ici 2050, dont
                plus de 75% vivront dans des régions urbaines, la croissance
                démographique exerce une pression considérable sur les
                ressources alimentaires, hydriques et énergétiques déjà
                limitées. Cette demande croissante nécessite l'adoption de{" "}
                <strong>nouveaux systèmes agricoles</strong> plus{" "}
                <strong>durables</strong> pour assurer une production
                alimentaire suffisante. Les cultures verticales se positionnent
                comme une réponse stratégique, offrant une solution novatrice
                pour maximiser l'<strong>utilisation de l'espace</strong>,
                réduire la consommation d'eau et répondre efficacement aux
                besoins alimentaires croissants, tout en minimisant l'impact sur
                les ressources naturelles.
                <br />
                Ce petit jeu a pour but de vous faire découvrir le{" "}
                <strong>fermes verticales</strong> ! Occupez-vous de votre terre
                agricole en plantant, arrosant et récoltant votre culture puis
                comparez vos résultats avec la ferme verticale automatique !
                Informez-vous durant la partie sur son fonctionnement et ses
                avantages grâce aux icones informations.
            </Popup>
            <Popup
                show={end}
                onClose={() => location.reload()}
                title="Fin de partie"
            >
                <ul>
                    <li>
                        Vous avez utilisé {totalWater}L d'eau, contre{" "}
                        {totalWaterVertical}L pour l'agriculture verticale.
                    </li>
                    <li>
                        Vous avez récolté {carrots * 3}kg de carottes, contre{" "}
                        {carrotsVertical * 4}kg pour l'agriculture verticale.
                    </li>
                    <br />
                    Merci d’avoir joué et découvert l’utilité des fermes
                    verticales ! N'hésitez pas à le partager autour de vous pour
                    sensibiliser à cette solution d'avenir.
                </ul>
            </Popup>
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
