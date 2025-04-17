import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PrivateRoutes = ({isLoggedIn,children}) =>{
 
    if(isLoggedIn){
       return children; 
    }
    else{
        return <Navigate to="/login"/>

    }
}
export default PrivateRoutes