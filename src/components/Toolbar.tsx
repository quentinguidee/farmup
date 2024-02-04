import { State } from "../models/plant";

type Props = {
    onPlant: () => void;
    onWater: () => void;
    onHarvest: () => void;
    state: State;
};

export default function Toolbar(props: Props) {
    const { onPlant, onWater, onHarvest, state } = props;

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
