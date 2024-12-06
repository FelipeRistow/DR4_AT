import React, {useState} from 'react';
import {login} from "../../services/auth";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import Button from "../../components/Button";

interface SignInProps {
    onSuccess: () => void
}

const Index: React.FC<SignInProps> = (props) => {
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
        <div className={"AuthForm"}>
            <form className={"Form"} onSubmit={handleSubmit}>
                <h2>
                    Entrar
                </h2>
                <div className={"InputGroup"}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className={"InputGroup"}>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </div>
                <Button
                    variant={"contained"}
                    sx={{backgroundColor: "white", color: "black"}}
                    type="submit"
                >
                    Entrar
                </Button>

                <span>Ainda não tem uma conta? <a onClick={() => navigate("/sign-up")}>Cadastre-se!</a></span>
            </form>
        </div>
    );
};

export default Index;
