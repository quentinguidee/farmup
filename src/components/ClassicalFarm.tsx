import { State } from "../models/plant";
import Asset from "./Asset";
import FarmContent from "./FarmContent";
import ProgressBar from "./ProgressBar";

type Props = {
    state: State;
    waterLevel: number;
    timerHarvest: number;
};

export default function ClassicalFarm(props: Props) {
    const { state, waterLevel, timerHarvest } = props;

    return (
        <div className="farm farm-classic">
            <ProgressBar value={timerHarvest} color="rgb(238, 220, 227)" />
            <ProgressBar value={waterLevel} color="rgb(42, 124, 211)" />
            <FarmContent>
                <Plot x={0.5} y={0.3} state={state} />
                <Plot x={0.75} y={0.4} state={state} />
                <Plot x={0.25} y={0.4} state={state} />
                <Plot x={0.5} y={0.5} state={state} />
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
