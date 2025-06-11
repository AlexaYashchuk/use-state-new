import { Route, Routes } from "react-router-dom";
import { Comp1 } from "./componets/comp1";
import { Comp2 } from "./componets/comp2";
import { Comp3 } from "./componets/comp3";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/comp1" element={<Comp1 />} />
      <Route path="/comp2" element={<Comp2 />} />
      <Route path="/comp3" element={<Comp3 />} />
    </Routes>
  );
};

export { AppRoutes };
