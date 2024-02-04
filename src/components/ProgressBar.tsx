type Props = {
    value: number;
    color: string;
    speed?: number;
    icon: string;
};

export default function ProgressBar(props: Props) {
    const { value, color, speed, icon } = props;
    return (
        <div className="progress-wrapper">
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
            <span className="material-symbols-outlined">{icon}</span>
        </div>
    );
}
