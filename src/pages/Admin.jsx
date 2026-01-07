import { Navigate } from "react-router";
//import { useNavigate } from "react-router";

const Admin = ({ isAuth }) => {
  // const navigate = useNavigate();

  //useEffect(() => {
  //   if (!isAuth) {
  //    navigate("/");
  //  }
  //}, [isAuth]);//
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};
export default Admin;
