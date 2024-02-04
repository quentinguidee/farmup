import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    show: boolean;
    onClose: () => void;
    title: string;
}>;

export default function Popup(props: Props) {
    const { children, title, onClose, show, ...others } = props;

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
