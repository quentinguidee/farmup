import { PropsWithChildren, useEffect } from "react";

type Props = PropsWithChildren<{
    show: boolean;
    onClose: () => void;
    title: string;
}>;

export default function Popup(props: Props) {
    const { children, title, onClose, show, ...others } = props;

    useEffect(() => {
        if (!show) return;
        const onKeyup = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keyup", onKeyup);
        return () => window.removeEventListener("keyup", onKeyup);
    }, [show]);

    if (!show) return null;

    return (
        <>
            <div className="popup" {...others}>
                <h2 className="popup-title">{title}</h2>
                {children}
            </div>
            <div className="popup-backdrop" onClick={onClose} />
        </>
    );
}
