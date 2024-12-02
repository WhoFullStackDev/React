import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// white jsx
const myElement = <h1>Hello world</h1>;

// without jsx
const myElement1 = React.createElement("h1", {}, "Jsx not useing here");

// Expressions in JSX
const expreession = <h1>React is {5 + 5} times better with jsx</h1>;

createRoot(document.getElementById("root")).render(
  /*myElement*/
  /*myElement1*/ expreession
);
