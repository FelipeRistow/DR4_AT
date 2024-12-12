import React, { useState } from 'react';
import {FormControlLabel, FormGroup, ToggleButton, ToggleButtonGroup} from "@mui/material";
import Switch from "../components/Switch";
import Box from "../components/Box";
import Card from "../components/Card";
import usePersistedState from "../services/usePersistedState";

const Settings: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [selectedHourFormat, setSelectedHourFormat] = usePersistedState<number>("hourFormat", 24)

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const toggleSelectedHourFormat = (e: React.MouseEvent, value: number) => {
        setSelectedHourFormat(value || selectedHourFormat);
    }

    console.log(" SS ", selectedHourFormat);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
            <Card sx={{
                width: "30%",
                height: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h1>Configurações</h1>
                <FormGroup>
                    <FormControlLabel control={<Switch value={!darkMode} onChange={toggleTheme}/>} label="Modo Escuro"/>
                </FormGroup>

                <p>Modo Escuro {darkMode ? 'Ativado' : 'Desativado'}</p>
            </Card>
            <Card sx={{
                width: "30%",
                height: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h1>Formato de hora</h1>
                <FormGroup>
                    <ToggleButtonGroup
                        value={selectedHourFormat}
                        onChange={toggleSelectedHourFormat}
                        exclusive
                    >
                        <ToggleButton value={24}>24 horas</ToggleButton>
                        <ToggleButton value={12}>12 horas</ToggleButton>
                    </ToggleButtonGroup>
                </FormGroup>

                <p>Utilizando formato de {selectedHourFormat} horas</p>
            </Card>
        </Box>
    );
};

export default Settings;
