import React from "react";
import Goal from "./Goal";

const App = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <Goal isGoal={true} cars={cars} />
    </div>
  );
};

export default App;
