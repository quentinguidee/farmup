import { useState } from "react";
import { State } from "../models/plant";
import Info from "./Info";
import Popup from "./Popup";

type Props = {
    onPlant: () => void;
    onWater: () => void;
    onHarvest: () => void;
    state: State;
};

export default function Toolbar(props: Props) {
    const { onPlant, onWater, onHarvest, state } = props;

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="toolbar">
            <button
                className="toolbar-button"
                onClick={onPlant}
                disabled={state !== "state0"}
            >
                Plant
            </button>
            <button className="toolbar-button" onClick={onWater}>
                Water (400L)
            </button>
            <Info
                onClick={() => setShowPopup(true)}
                style={{ right: "35%", top: "50%" }}
            />
            <Popup
                show={showPopup}
                onClose={() => setShowPopup(false)}
                title="Carottes"
            >
                En moyenne les carottes nécessitent 350L d’eau d’irrigation par
                mètres carré de culture, ce qui correspond à 3kg de carottes
                produites (
                <a href="https://www.service-public.pf/dag/wp-content/uploads/sites/28/2018/12/carotte-ft-culture_SDRdag_v2016.pdf">
                    source
                </a>
                ). L’agriculture verticale permet d’économiser jusqu’à 90% de
                cette eau (
                <a href="https://www.aquavertifarms.com/technologie">source</a>)
            </Popup>
            <button
                className="toolbar-button"
                onClick={onHarvest}
                disabled={state !== "state2"}
            >
                Harvest
            </button>
        </div>
    );
}
