type Props = {
    position: "left" | "right";
    water: number;
};

export default function Score(props: Props) {
    const { water, position } = props;
    return (
        <div
            className="score"
            style={{
                left: position === "left" ? 20 : undefined,
                right: position === "right" ? 20 : undefined,
            }}
        >
            <span className="score-value">Water: {water}L</span>
        </div>
    );
}
