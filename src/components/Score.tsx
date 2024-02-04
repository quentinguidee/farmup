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
                left: position === "left" ? undefined : 20,
                right: position === "right" ? undefined : 20,
            }}
        >
            <span className="score-value">Water: {water}</span>
        </div>
    );
}
