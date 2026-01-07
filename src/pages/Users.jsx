import { useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getAllUsers();
  }, []);
  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Users;
