import React from "react";
import "./styles.scss";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./views/Home";
import Index from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Form from "./views/Form";
import Alert from "./components/Alert";
import AppProvider from "./Context";

export default function App() {
    const [signInSuccess, setSignInSuccess] = React.useState(false);

    const handleSignInSuccess = () => {
        setSignInSuccess(true);
        setTimeout(() => setSignInSuccess(false), 2000)
    }

    return (
        <AppProvider>
            <div className="App">
                {signInSuccess && (
                    <Alert severity={"success"}>
                        <h2>Login efetuado com sucesso!</h2>
                    </Alert>
                )}
                <Routes>
                    <Route path="/" element={<div>Vá para uma página</div>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/sign-in" element={<Index onSuccess={handleSignInSuccess}/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route
                        path="/form"
                        element={
                            <ProtectedRoute>
                                <Form/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </AppProvider>
    );
}
