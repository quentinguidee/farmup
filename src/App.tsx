import ClassicalFarm from "./components/ClassicalFarm";
import VerticalFarm from "./components/VerticalFarm";

import "./styles/farm.css";
import "./styles/window.css";

export default function App() {
    return (
        <div className="farms">
            <VerticalFarm />
            <ClassicalFarm />
        </div>
    );
}
