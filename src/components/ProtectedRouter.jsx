import {  useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRouter = ({children}) => {
    const { user } =useContext(UserContext);
    if (!user) {
        return <Navigate to="/register" />
    }
    return children
};
export default ProtectedRouter;