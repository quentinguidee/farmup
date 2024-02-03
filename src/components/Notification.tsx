import { useEffect, useState } from "react";

export default function Notification() {
    const [message, setMessage] = useState("");

    const generateMessage = () => {
        // TODO: Generate a random message
        const messages = [
            "Your plant needs water!",
            "Your plant needs to be harvested!",
            "Your plant needs to be planted!",
        ];
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        // TODO: End
    };

    useEffect(() => {
        const interval = setInterval(() => {
            generateMessage();
        }, 5000);
        return () => clearInterval(interval);
    }, [message]);

    if (!message) return null;

    return (
        <div className="notification">
            <span className="notification-message">{message}</span>
        </div>
    );
}
