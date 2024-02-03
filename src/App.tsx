import ClassicalFarm from "./components/ClassicalFarm";
import Toolbar from "./components/Toolbar";
import VerticalFarm from "./components/VerticalFarm";
import { Timer } from "./components/Timer";

import "./styles/toolbar.css";
import "./styles/farm.css";
import "./styles/window.css";
import "./styles/timer.css";
import "./styles/asset.css";

export default function App() {
    return (
        <>
            <Toolbar />
            <Timer />
            <div className="farms">
                <ClassicalFarm />
                <VerticalFarm />
            </div>
        </>
    );
}
