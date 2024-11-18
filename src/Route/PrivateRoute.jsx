import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if(loading) {
    return <Loading></Loading>
  }

  if(user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate> ;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;
