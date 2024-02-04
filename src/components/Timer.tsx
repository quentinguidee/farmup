import { useEffect, useState } from "react";

type Props = {
    running: boolean;
    onEnd: () => void;
};

export function Timer(props: Props) {
    const { running, onEnd } = props;

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                    onEnd();
                    return;
                }
                setSeconds(59);
                setMinutes(minutes - 1);
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds, running]);

    return (
        <div className="timer">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
        </div>
    );
}
