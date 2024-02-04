import { State } from "../models/plant";
import Asset from "./Asset";
import FarmContent from "./FarmContent";
import ProgressBar from "./ProgressBar";

type Props = {
    state: State;
    waterLevel: number;
    timerHarvest: number;
};

export default function VerticalFarm(props: Props) {
    const { state, waterLevel, timerHarvest } = props;

    return (
        <div className="farm farm-vertical">
            <ProgressBar
                value={timerHarvest}
                color="rgb(238, 220, 227)"
                speed={0.5}
            />
            <ProgressBar value={waterLevel} color="rgb(42, 124, 211)" />
            <FarmContent>
                <Plot x={0} state={state} />
                <Plot x={1} state={state} />
                <Plot x={2} state={state} />
                <Plot x={3} state={state} />
            </FarmContent>
        </div>
    );
}

type PlotProps = {
    x: number;
    state: State;
};

function Plot(props: PlotProps) {
    const { x = 0, state } = props;

    let asset;
    switch (state) {
        case "state1":
            asset = <Asset name="vertical-farm-1" />;
            break;
        case "state2":
            asset = <Asset name="vertical-farm-2" />;
            break;
        default:
            asset = <Asset name="vertical-farm-0" />;
            break;
    }

    return (
        <div
            className="plot-vertical"
            style={{ left: `${x * 20}%`, top: `${x * 5.5}%` }}
        >
            {asset}
        </div>
    );
}
