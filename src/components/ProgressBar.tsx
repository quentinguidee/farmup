type Props = {
    value: number;
    color: string;
};

export default function ProgressBar(props: Props) {
    const { value, color } = props;
    return (
        <div className="progress-bar">
            <div
                className="progress-bar-value"
                style={{
                    width: `calc(${value}% - 2px)`,
                    backgroundColor: color,
                }}
            />
        </div>
    );
}
