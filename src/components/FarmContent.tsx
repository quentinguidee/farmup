type FarmContentProps = {
    children: React.ReactNode;
};

export default function FarmContent(props: FarmContentProps) {
    return <div className="farm-content" {...props} />;
}
