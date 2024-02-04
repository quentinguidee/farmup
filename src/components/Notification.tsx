import { useEffect, useState } from "react";

export default function Notification() {
    const [message, setMessage] = useState("");

    const generateMessage = () => {
        fetch('http://localhost:5000/get-fun-fact')
            .then(response => response.json())
            .then(data => {
                setMessage(data.fun_fact);
            })
            .catch(error => console.error('Error fetching fun fact:', error));
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
