import React from "react";

const Goal = (props) => {
  //   if (props.isGoal) {
  //     return <MadeGoal />;
  //   }
  //   return <MissedGoal />;
  //   Logical && Operator;

  //   const cars = props.cars;

  //   return (
  //     <>
  //       <h1>Garage</h1>
  //       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
  //     </>
  //   );

  // Ternary Operator
  return <>{props.isGoal ? <MadeGoal /> : <MissedGoal />}</>;
};

const MissedGoal = () => {
  return <div>Oh no Goal missed</div>;
};

const MadeGoal = () => {
  return <div>You made a gaol</div>;
};

export default Goal;
