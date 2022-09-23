import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const statusUser = useSelector((state) => state.statusUser);
  console.log("statusUser", statusUser);
  if (statusUser == false) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
export default Protected;
