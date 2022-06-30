// Third party libraries
import { Route, Routes } from "react-router-dom";

// Shared internal imports
import { Home } from "pages";

const RouteRenderer = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default RouteRenderer;
