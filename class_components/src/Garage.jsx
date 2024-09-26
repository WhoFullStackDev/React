import React from "react";

import Car from "./App";

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car model="Mustang" />
      </div>
    );
  }
}

export default Garage;
