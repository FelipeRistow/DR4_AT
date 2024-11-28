import React, { useState } from 'react';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

const Settings: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <h1>Configurações</h1>
            <FormGroup>
                <FormControlLabel control={<Switch value={!darkMode} onChange={toggleTheme} />} label="Modo Escuro" />
            </FormGroup>

            <p>Modo Escuro {darkMode ? 'Ativado' : 'Desativado'}</p>
        </div>
    );
};

export default Settings;
