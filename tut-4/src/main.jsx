import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cars from "./component/Cars.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cars color="red" />
  </StrictMode>
);
