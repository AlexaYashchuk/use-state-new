import "./App.css";

import { Link } from "react-router-dom";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <ul className="link-table">
        <li>
          <Link to="/comp1">Пример 1</Link>
        </li>

        <li>
          <Link to="/comp2">Пример 2</Link>
        </li>
        <li>
          <Link to="/comp3">Пример 3</Link>
        </li>
      </ul>
      <AppRoutes />
    </>
  );
}

export default App;
