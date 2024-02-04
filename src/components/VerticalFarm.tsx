import { useState } from "react";
import { State } from "../models/plant";
import Asset from "./Asset";
import FarmContent from "./FarmContent";
import Info from "./Info";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";

type Props = {
    state: State;
    waterLevel: number;
    timerHarvest: number;
    setRunning: (running: boolean) => void;
};

export default function VerticalFarm(props: Props) {
    const { state, waterLevel, timerHarvest, setRunning } = props;

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="farm farm-vertical">
            <ProgressBar
                value={timerHarvest}
                color="rgb(238, 220, 227)"
                speed={0.5}
                icon="agriculture"
            />
            <ProgressBar
                value={waterLevel}
                color="rgb(42, 124, 211)"
                icon="water_drop"
            />
            <FarmContent>
                <Plot x={0} state={state} />
                <Plot x={1} state={state} />
                <Plot x={2} state={state} />
                <Plot x={3} state={state} />
                <Info
                    onClick={() => {
                        setShowPopup(true);
                        setRunning(false);
                    }}
                    style={{ right: "10%", top: "25%" }}
                />
                <Popup
                    show={showPopup}
                    onClose={() => {
                        setShowPopup(false);
                        setRunning(true);
                    }}
                    title="Fonctionnement des cultures verticales"
                >
                    Les cultures verticales révolutionnent l'agriculture en
                    exploitant l'espace de manière verticale plutôt
                    qu'horizontale. Ce système ingénieux repose sur des
                    structures en couches superposées, souvent à l'intérieur de
                    bâtiments spécialement conçus. Les plantes sont disposées
                    sur des étagères stratégiquement conçues pour optimiser
                    l'utilisation de l'espace vertical, favorisant une densité
                    de culture élevée., bénéficiant d'un éclairage artificiel,
                    de systèmes d'irrigation précis et d'une régulation
                    environnementale minutieuse. Grâce à cette approche, les
                    cultivateurs peuvent optimiser la productivité sur une
                    empreinte au sol réduite, tout en minimisant la dépendance
                    aux conditions climatiques extérieures. Les technologies
                    avancées, telles que la culture hydroponique ou aéroponique,
                    permettent aux plantes de prospérer dans un environnement
                    contrôlé, offrant ainsi une solution durable et efficiente
                    pour répondre aux défis croissants de la sécurité
                    alimentaire mondiale. <br />
                    <a
                        href="http://cretau.ca/wp-content/uploads/2021/05/Fiche-e%CC%81conomique_Marai%CC%82chage-en-inte%CC%81rieur_F_edite%CC%81e.pdf"
                        target="_blank"
                    >
                        En savoir plus
                    </a>
                    <div style={{ height: 10 }} />
                    <h2 className="popup-title">
                        Technique culture verticales
                    </h2>
                    Les fermes verticales se composent de trois composants
                    fondamentaux : (1) la stucture du système, (2)
                    l'infrastructure électrique et (3) l'agencement de la
                    plomberie (illustré dans l'image ci-dessous). Ces trois
                    aspects revêtent une importance capitale, car ils influent
                    sur l'emplacement du système, les types de cultures pouvant
                    y être cultivées, ainsi que les ressources indispensables à
                    sa mise en place. Il est impératif de les prendre en
                    considération préalablement au lancement de toute opération
                    d'agriculture verticale. En agriculture verticale, il y a
                    trois principaux types de système : (1) hydroponique, (2)
                    aquaponique, et (3) ceux basés sur les substrats de culture.
                    <br />
                    <a
                        href="http://cretau.ca/wp-content/uploads/2021/05/Fiche-e%CC%81conomique_Marai%CC%82chage-en-inte%CC%81rieur_F_edite%CC%81e.pdf"
                        target="_blank"
                    >
                        En savoir plus
                    </a>
                </Popup>
            </FarmContent>
            <a
                href="https://www.france.tv/france-5/silence-ca-pousse/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
            >
                Silence, ça pousse!
            </a>
        </div>
    );
}

type PlotProps = {
    x: number;
    state: State;
};

function Plot(props: PlotProps) {
    const { x = 0, state } = props;

    let asset;
    switch (state) {
        case "state1":
            asset = <Asset name="vertical-farm-1" />;
            break;
        case "state2":
            asset = <Asset name="vertical-farm-2" />;
            break;
        default:
            asset = <Asset name="vertical-farm-0" />;
            break;
    }

    return (
        <div
            className="plot-vertical"
            style={{ left: `${x * 20}%`, top: `${x * 5.5}%` }}
        >
            {asset}
        </div>
    );
}
