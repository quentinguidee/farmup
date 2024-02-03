type AssetProps = {
    name: string;
};

export default function Asset(props: AssetProps) {
    const { name } = props;
    return <img src={`assets/${name}.png`} alt="Asset" className="asset" />;
}
