type Props = {
    position: "left" | "right";
    water: number;
    carrots: number;
};

export default function Score(props: Props) {
    const { water, carrots, position } = props;
    return (
        <div
            className="score"
            style={{
                left: position === "left" ? 110 : undefined,
                right: position === "right" ? 20 : undefined,
            }}
        >
            <span className="score-value">Eau: {Math.round(water)}L</span>
            <span className="score-value">Carrottes: {carrots}kg</span>
        </div>
    );
}
