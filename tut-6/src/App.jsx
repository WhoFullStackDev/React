import React from "react";
import Car from "./Car";

const App = () => {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <div>
      <h1>Who live in my garage?</h1>
      <Car brand={carInfo} />
    </div>
  );
};

export default App;
