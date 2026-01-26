import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin") === "true";

  if (!isLogin) {
    return <Navigate to="/" replace />; // redirect to home/login
  }

  return children;
};

export default ProtectedRoute;
