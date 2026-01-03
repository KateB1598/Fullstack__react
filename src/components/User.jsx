import { useContext } from "react";
import { UserContext } from "./UserProvider";

const User = () => {
  const user = useContext(UserContext);

  return (
    <>
      <div>User: {user.username}</div>
    </>
  );
};
export default User;
