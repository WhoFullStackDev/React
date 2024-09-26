import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
// import Car from "./App.jsx";
import Garage from "./Garage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Garage />
  </StrictMode>
);
