import Asset from "./Asset";
import FarmContent from "./FarmContent";

export default function VerticalFarm() {
    return (
        <div className="farm farm-vertical">
            <FarmContent>
                <Plot x={0} />
                <Plot x={1} />
                <Plot x={2} />
                <Plot x={3} />
            </FarmContent>
        </div>
    );
}

type PlotProps = {
    x: number;
};

function Plot(props: PlotProps) {
    const { x = 0 } = props;
    return (
        <div
            className="plot-vertical"
            style={{ left: `${x * 20}%`, top: `${x * 5.5}%` }}
        >
            <Asset name="vertical-farm" />
        </div>
    );
}
