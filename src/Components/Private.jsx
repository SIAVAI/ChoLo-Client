/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Auth/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  //   if (loader) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default Private;
