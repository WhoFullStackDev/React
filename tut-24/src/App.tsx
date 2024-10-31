import { useQuery } from "@tanstack/react-query";
import { fetchTodoApi } from "./fetchApi";

function App() {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["Todos"],
    queryFn: fetchTodoApi,
  });
  if (isPending) {
    return <div>Loading....</div>;
  }
  if (isError) {
    <div>{error.message}</div>;
  }
  return (
    <>
      {data?.map((val) => (
        <ul key={val.id}>
          <li>{val.title}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
