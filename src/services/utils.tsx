import React from 'react';
import {Navigate} from 'react-router-dom';
import { isLoggedIn } from './auth';

interface ProtectedRouteProps{
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    if (!isLoggedIn()) {
        return <Navigate to="/sign-in" replace />;
    }

    return <>{children}</>;
};