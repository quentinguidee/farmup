import { useState } from "react";
import { State } from "../models/plant";
import Asset from "./Asset";
import FarmContent from "./FarmContent";
import ProgressBar from "./ProgressBar";
import Popup from "./Popup";
import Info from "./Info";

type Props = {
    state: State;
    waterLevel: number;
    timerHarvest: number;
};

export default function ClassicalFarm(props: Props) {
    const { state, waterLevel, timerHarvest } = props;

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="farm farm-classic">
            <ProgressBar value={timerHarvest} color="rgb(238, 220, 227)" />
            <ProgressBar value={waterLevel} color="rgb(42, 124, 211)" />
            <FarmContent>
                <Plot x={0.5} y={0.3} state={state} />
                <Plot x={0.75} y={0.4} state={state} />
                <Plot x={0.25} y={0.4} state={state} />
                <Plot x={0.5} y={0.5} state={state} />
                <Info
                    onClick={() => setShowPopup(true)}
                    style={{ right: "0%", top: "58%" }}
                />
                <Popup
                    show={showPopup}
                    onClose={() => setShowPopup(false)}
                    title="Eau sur cultures en terre"
                >
                    <ul>
                        <li>
                            L’agriculture classique est responsable de 70% des
                            dépenses en eau mondiales. De ces 70%, environ 40%
                            de l'eau est perdue en raison de l'évaporation, du
                            ruissellement et de l'absorption inégale par le sol.
                            (
                            <a href="https://htt.io/water-usage-in-the-agricultural-industry/#:~:text=Irrigation%20is%20the%20process%20used,or%20get%20lost%20in%20transit.">
                                source
                            </a>
                            )
                        </li>
                        <li>
                            En moyenne, l'irrigation en pleine terre peut
                            nécessiter 60 à 200 litres d'eau par kilogramme de
                            production végétale, selon le type de culture et les
                            conditions climatiques. selon une recherche de
                            l’Université de Wageningen, aux Pays-Bas. (
                            <a href="https://www.journaldequebec.com/2021/03/23/lagriculture-consomme-trop-deau#:~:text=Les%20fermes%20verticales%20r%C3%A9duisent%20la,plantes%20est%20capt%C3%A9e%20et%20r%C3%A9utilis%C3%A9e.">
                                source
                            </a>
                            )
                        </li>
                        <li>
                            Certains rapports suggèrent que les fermes
                            verticales peuvent utiliser environ 70 à 95% moins
                            d'eau que les cultures en pleine terre. (
                            <a href="https://www.aquavertifarms.com/technologie">
                                source
                            </a>
                            )
                        </li>
                    </ul>
                </Popup>
            </FarmContent>
        </div>
    );
}

type PlotProps = {
    x: number;
    y: number;
    state: State;
};

function Plot(props: PlotProps) {
    const { x = 0, y = 0, state } = props;

    let asset;
    switch (state) {
        case "state1":
            asset = <Asset name="plant-carrot-1" />;
            break;
        case "state2":
            asset = <Asset name="plant-carrot-2" />;
            break;
        default:
            asset = <Asset name="plant" />;
    }

    return (
        <div
            className="plot"
            style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
        >
            {asset}
        </div>
    );
}
