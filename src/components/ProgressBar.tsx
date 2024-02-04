type Props = {
    value: number;
    color: string;
    speed?: number;
};

export default function ProgressBar(props: Props) {
    const { value, color, speed } = props;
    return (
        <div className="progress-bar">
            <div
                className="progress-bar-value"
                style={{
                    width: `calc(${value}% - 2px)`,
                    backgroundColor: color,
                    transition: `width ${speed || 0.05}s linear`,
                }}
            />
        </div>
    );
}
