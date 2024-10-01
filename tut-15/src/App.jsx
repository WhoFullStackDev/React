import AccessingDOMElements from "./AccessingDOMElements";
import DoesNotCauseReRenders from "./DoesNotCauseReRenders";
import TrackingStateChange from "./TrackingStateChange";

const App = () => {
  return (
    <>
      <DoesNotCauseReRenders />
      <AccessingDOMElements />
      <TrackingStateChange />
    </>
  );
};

export default App;
