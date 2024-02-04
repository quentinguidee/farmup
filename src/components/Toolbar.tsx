type Props = {
    onPlant: () => void;
    onWater: () => void;
    onHarvest: () => void;
};

export default function Toolbar(props: Props) {
    const { onPlant, onWater, onHarvest } = props;

    return (
        <div className="toolbar">
            <button className="toolbar-button" onClick={onPlant}>
                Plant
            </button>
            <button className="toolbar-button" onClick={onWater}>
                Water (400L)
            </button>
            <button className="toolbar-button" onClick={onHarvest}>
                Harvest
            </button>
        </div>
    );
}
