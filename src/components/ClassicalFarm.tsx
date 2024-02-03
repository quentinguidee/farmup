import Asset from "./Asset";
import FarmContent from "./FarmContent";

export default function ClassicalFarm() {
    return (
        <div className="farm farm-classic">
            <FarmContent>
                <Plot x={0.5} y={0.6} />
                <Plot x={0.5} y={0.4} />
                <Plot x={0.25} y={0.5} />
                <Plot x={0.75} y={0.5} />
            </FarmContent>
        </div>
    );
}

type PlotProps = {
    x: number;
    y: number;
};

function Plot(props: PlotProps) {
    const { x = 0, y = 0 } = props;
    return (
        <div
            className="plot"
            style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
        >
            <Asset name="plant" />
        </div>
    );
}
