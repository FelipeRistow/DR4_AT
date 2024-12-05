import React, {useState} from 'react';
import {login} from "../services/auth";
import {useNavigate} from "react-router-dom";

interface SignInProps {
    onSuccess: () => void
}

const SignIn: React.FC<SignInProps> = (props) => {
    const {onSuccess} = props;
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login("IOJGHNRIOUJGNHR");
        onSuccess();
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Sign In</h2>
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
                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default SignIn;
