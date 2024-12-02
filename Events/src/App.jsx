import React from "react";

const App = () => {
  // const shoot = (a) => {
  //   console.log(a);
  // };
  const shoot = (a, b) => {
    console.log(a);
    alert(b.type);
  };
  return (
    <div>
      <button
        // onClick={shoot("goal")}
        onClick={(event) => {
          shoot("Goal", event);
        }}
      >
        Take the shoot!
      </button>
    </div>
  );
};

export default App;
