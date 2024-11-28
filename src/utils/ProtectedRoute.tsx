import React from 'react';
import {Navigate} from 'react-router-dom';
import {isLoggedIn} from "../services/auth";

interface ProtectedRouteProps{
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    if (!isLoggedIn()) {
        return <Navigate to="/sign-in" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;