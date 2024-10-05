import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>{count}</div>;
};

export default Count;
