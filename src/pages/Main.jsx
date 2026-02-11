import useFetch from "../hooks/useFetch";

const Main = () => {
  const { data = [] } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Main;
