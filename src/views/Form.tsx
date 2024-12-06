import React, {useState} from 'react';
import dayjs, {Dayjs} from "dayjs";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import DateTimePicker from "../components/DateTimePicker";
import {useNavigate} from "react-router-dom";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";

const Form: React.FC = () => {
    const navigate = useNavigate();
    const [diaperChangeTime, setDiaperChangeTime] = useState<Dayjs | null>(dayjs());
    const [diaperSituation, setDiaperSituation] = useState<string | null>("ACCEPTABLE");
    const [cried, setCried] = useState<boolean>(false);
    const [note, setNote] = useState<string>("");

    const handleSubmit = () => {
        navigate("/dashboard", {state: {created: true}});
    };

    return (
        <div>
            <h2>Formulário</h2>
            <FormControl onSubmit={handleSubmit}>
                <InputLabel id={'diaper-situation'}>Situação da fralda</InputLabel>
                <Select
                    labelId={'diaper-situation'}
                    label="Age"
                    value={diaperSituation}
                    onChange={(e) => setDiaperSituation(e.target.value)}
                >
                    <MenuItem value={"POOR"}>Ruim</MenuItem>
                    <MenuItem value={"ACCEPTABLE"}>Aceitável</MenuItem>
                    <MenuItem value={"GOOD"}>Boa</MenuItem>
                </Select>
                <div style={{height: 50}}></div>
                <DateTimePicker
                    label={'Trocada em'}
                    value={diaperChangeTime}
                    onChange={(value) => setDiaperChangeTime(value)}
                />
                <TextField
                    label={'Observação'}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <label htmlFor={'diaper-cried'}>Chorou?</label>
                <Checkbox
                    checked={cried}
                    onChange={(e) => setCried(e.target.checked)}
                />
                <Button onClick={handleSubmit}>SALVAR</Button>
            </FormControl>
        </div>
    );
};

export default Form;
