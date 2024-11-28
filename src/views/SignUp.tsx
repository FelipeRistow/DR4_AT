import React, { useState } from 'react';
import {login} from "../services/auth";
import {useNavigate} from "react-router-dom";

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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmar Senha"
                    required
                />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default SignUp;
