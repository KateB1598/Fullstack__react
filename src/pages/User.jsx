import { useEffect, useState } from "react";
import { useParams } from "react-router";

const User = () => {
  const params = useParams();
  console.log("params", params);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserById = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
      );
      const data = await res.json();
      setUser(data);
    };
    getUserById();
  }, [params.userId]);
  return (
    <div>
      <h1>User details</h1>
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};
export default User;
