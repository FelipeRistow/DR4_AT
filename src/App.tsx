import React from "react";
import "./styles.scss";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Alert from "./components/Alert";
import AppProvider from "./Context";
import {isLoggedIn} from "./services/auth";
import {FaHome} from "react-icons/fa";
import {FaChartColumn, FaGears} from "react-icons/fa6";
import SignIn from "./views/SignIn";
import SideMenu from "./utils/SideMenu";
import Form from "./views/Form";

export default function App() {
    const [signInSuccess, setSignInSuccess] = React.useState(false);

    const handleSignInSuccess = () => {
        setSignInSuccess(true);
        setTimeout(() => setSignInSuccess(false), 2000)
    }

    const routes = [
        {
            path: "/",
            element: <div>Vá para uma página</div>,
        },
        {
            path: "/home",
            element: <Home />,
            icon: <FaHome />,
            name: "Início"
        },
        {
            path: "/sign-in",
            element: <SignIn onSuccess={handleSignInSuccess}/>,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "/dashboard",
            element: <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>,
            icon: <FaChartColumn/>,
            name: "Dashboard"
        },
        {
            path: "/settings",
            element: <ProtectedRoute>
                <Settings />
            </ProtectedRoute>,
            icon: <FaGears/>,
            name: "Configurações"
        },
        {
            path: "/form",
            element: <ProtectedRoute>
                <Form/>
            </ProtectedRoute>
        }
    ]

    return (
        <AppProvider>
            <SideMenu routes={routes}/>
            <div className={`App ${isLoggedIn() ? "expanded" : ""}`}>
                {signInSuccess && (
                    <Alert severity={"success"}>
                        <h2>Login efetuado com sucesso!</h2>
                    </Alert>
                )}
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </div>
        </AppProvider>
    );
}

