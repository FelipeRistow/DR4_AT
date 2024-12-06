import React, { useState } from 'react';
import {login} from "../services/auth";
import {useNavigate} from "react-router-dom";
import "./SignIn/style.scss";
import Button from "../components/Button";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        login(" OJKGJMTOIGJMOIT")
        navigate('/dashboard')
    };

    return (
        <div className={"AuthForm"}>
            <form className={"Form signup"} onSubmit={handleSubmit}>
                <h2>Cadastrar</h2>
                <div className="InputGroup">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="InputGroup">
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </div>
                <div className={"InputGroup"}>
                    <label>Confirmar Senha</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirmar Senha"
                        required
                    />
                </div>
                <Button
                    variant={"contained"}
                    sx={{backgroundColor: "white", color: "black"}}
                    type="submit"
                >
                    Cadastrar
                </Button>

                <span>Já tem uma conta? <a onClick={() => navigate("/sign-in")}>Entrar</a></span>
            </form>
        </div>
    );
};

export default SignUp;
