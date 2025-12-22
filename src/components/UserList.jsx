import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchAllUsers();
  }, []);
  useEffect(() => {
    const getUserById = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await res.json();
      setUser(data);
    };
    getUserById();
  }, [userId]);

  return (
    <div className="users">
      <div className="list">
        <h2>Users list:</h2>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
      <div className="details">
        <h2>User details</h2>
        <input
          type="number"
          placeholder="Enter user id"
          value={userId}
          onChange={handleUserIdChange}
        />

        <h3>User info:</h3>
        {user.name && <div>{user.name}</div>}
      </div>
    </div>
  );
};
export default UserList;
