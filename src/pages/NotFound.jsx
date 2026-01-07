import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
};
export default NotFound;
